#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations

import csv
import json
import math
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Optional


NBSP = "\u00a0"
MONEY_RE = re.compile(r"р\.")


def _norm(s: str) -> str:
    return re.sub(r"\s+", " ", s.replace(NBSP, " ").strip()).lower()


def parse_ru_number(s: str) -> Optional[float]:
    s = s.replace(NBSP, " ").strip()
    s = re.sub(r"[^0-9,\.+\-]", "", s)
    if not s:
        return None
    if "," in s and "." in s:
        s = s.replace(".", "")
    s = s.replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def parse_rub(s: str) -> Optional[float]:
    return parse_ru_number(s)


def safe_div(a: float, b: float) -> Optional[float]:
    if b == 0:
        return None
    return a / b


def fmt(x: Optional[float], digits: int = 2) -> str:
    if x is None or (isinstance(x, float) and (math.isnan(x) or math.isinf(x))):
        return "n/a"
    return f"{x:,.{digits}f}".replace(",", " ")


@dataclass(frozen=True)
class Item:
    name: str
    rub: float


def _read_rows(csv_path: Path) -> list[list[str]]:
    with csv_path.open("r", encoding="utf-8", errors="replace", newline="") as f:
        return list(csv.reader(f))


def parse_item_money(row: list[str]) -> Optional[Item]:
    if len(row) < 2:
        return None
    name = row[0].strip()
    money = row[1].strip()
    if not name:
        return None
    if not MONEY_RE.search(money):
        return None
    val = parse_rub(money)
    if val is None:
        return None
    return Item(name=name, rub=val)


def slice_section(
    rows: list[list[str]],
    start_label_exact: str,
    end_label_exact: str = "Итого:",
) -> tuple[list[Item], Optional[float]]:
    start_idx = None
    for idx, row in enumerate(rows):
        if row and _norm(row[0]) == _norm(start_label_exact):
            start_idx = idx + 1
            break
    if start_idx is None:
        return [], None

    end_idx = None
    stated_total = None
    for idx in range(start_idx, len(rows)):
        row = rows[idx]
        if row and _norm(row[0]) == _norm(end_label_exact):
            end_idx = idx
            if len(row) >= 2:
                stated_total = parse_rub(row[1])
            break
    if end_idx is None:
        end_idx = len(rows)

    items: list[Item] = []
    for row in rows[start_idx:end_idx]:
        it = parse_item_money(row)
        if it:
            items.append(it)
    return items, stated_total


def find_single_money_cell(rows: list[list[str]]) -> Optional[float]:
    # In this sheet, opex subtotal is a row with empty name and rub in col2.
    for row in rows:
        if len(row) >= 2 and (not row[0].strip()) and MONEY_RE.search(row[1] or ""):
            v = parse_rub(row[1])
            if v is not None:
                return v
    return None


def find_cost_per_kg(rows: list[list[str]]) -> tuple[Optional[float], Optional[float]]:
    # Looks like:
    # ['', '', 'Себестоимость продукции', 'р.3 131,25', 'на 1 кг']
    # ['', '', 'С кап затратами', 'р.4 656,25', '']
    opex = None
    total = None
    for row in rows:
        if len(row) >= 4 and _norm(row[2]) == _norm("Себестоимость продукции"):
            opex = parse_rub(row[3])
        if len(row) >= 4 and _norm(row[2]) == _norm("С кап затратами"):
            total = parse_rub(row[3])
    return opex, total


def main() -> None:
    here = Path(__file__).resolve().parent
    csv_path = here / "sheet1.csv"
    out_report = here / "report_sheet1.md"
    out_metrics = here / "metrics_sheet1.json"
    out_capex_csv = here / "capex_breakdown_sheet1.csv"
    out_opex_csv = here / "opex_breakdown_sheet1.csv"

    rows = _read_rows(csv_path)

    capex_items, capex_stated = slice_section(rows, "Кап затры")
    opex_items, _ = slice_section(rows, "Операционные затры")
    opex_stated = find_single_money_cell(rows)
    cost_opex_per_kg, cost_total_per_kg = find_cost_per_kg(rows)

    capex_total_calc = sum(i.rub for i in capex_items)
    opex_total_calc = sum(i.rub for i in opex_items)

    capex = capex_stated if capex_stated is not None else capex_total_calc
    opex = opex_stated if opex_stated is not None else opex_total_calc
    total = capex + opex

    metrics = {
        "source_file": str(csv_path),
        "capex_items": [i.__dict__ for i in capex_items],
        "opex_items": [i.__dict__ for i in opex_items],
        "capex_total_calc": capex_total_calc,
        "opex_total_calc": opex_total_calc,
        "capex_total_stated": capex_stated,
        "opex_total_stated": opex_stated,
        "total_cost_calc": total,
        "cost_per_kg_opex_stated": cost_opex_per_kg,
        "cost_per_kg_total_stated": cost_total_per_kg,
    }

    out_metrics.write_text(json.dumps(metrics, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    out_capex_csv.write_text(
        "item,rub\n" + "\n".join(f"\"{i.name}\",{i.rub:.2f}" for i in capex_items) + "\n",
        encoding="utf-8",
    )
    out_opex_csv.write_text(
        "item,rub,share_opex_calc\n"
        + "\n".join(
            f"\"{i.name}\",{i.rub:.2f},{(i.rub / opex_total_calc) if opex_total_calc else ''}"
            for i in opex_items
        )
        + "\n",
        encoding="utf-8",
    )

    report = []
    report.append("# Лист1: зарплатная смета / плановые затраты (sheet1.csv)\n")
    report.append("## Итоги\n")
    report.append(f"- Капзатраты: {fmt(capex, 2)} руб\n")
    report.append(f"- Операционные: {fmt(opex, 2)} руб\n")
    report.append(f"- Всего: {fmt(total, 2)} руб\n")
    report.append("\n## Себестоимость (как указано в листе)\n")
    report.append(f"- Опер. на 1 кг: {fmt(cost_opex_per_kg, 2)} руб/кг\n")
    report.append(f"- С капзатратами на 1 кг: {fmt(cost_total_per_kg, 2)} руб/кг\n")
    report.append("\n## Опер. статьи\n")
    for it in opex_items:
        share = (it.rub / opex_total_calc * 100) if opex_total_calc else None
        report.append(f"- {it.name}: {fmt(it.rub, 2)} руб ({fmt(share, 1)}% от суммы статей)\n")
    report.append("\n## Капзатраты\n")
    for it in capex_items:
        share = (it.rub / capex_total_calc * 100) if capex_total_calc else None
        report.append(f"- {it.name}: {fmt(it.rub, 2)} руб ({fmt(share, 1)}% от суммы статей)\n")

    out_report.write_text("".join(report), encoding="utf-8")

    print(f"Wrote {out_report}")
    print(f"Wrote {out_metrics}")
    print(f"Wrote {out_capex_csv}")
    print(f"Wrote {out_opex_csv}")


if __name__ == "__main__":
    main()

