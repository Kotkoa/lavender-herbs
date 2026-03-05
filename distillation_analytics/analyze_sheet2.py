#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations

import csv
import json
import math
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Optional


NBSP = "\u00a0"
MONEY_RE = re.compile(r"р\.")


def _norm(s: str) -> str:
    return re.sub(r"\s+", " ", s.replace(NBSP, " ").strip()).lower()


def parse_ru_number(s: str) -> Optional[float]:
    s = s.replace(NBSP, " ").strip()
    s = re.sub(r"[^0-9,\.+\-]", "", s)
    if not s:
        return None
    # If both comma and dot exist, assume dot is thousands separator and comma is decimal.
    if "," in s and "." in s:
        s = s.replace(".", "")
    s = s.replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def parse_rub(s: str) -> Optional[float]:
    return parse_ru_number(s)


def parse_percent(s: str) -> Optional[float]:
    s = s.strip()
    if "%" not in s:
        return parse_ru_number(s)
    n = parse_ru_number(s)
    return n


@dataclass(frozen=True)
class Item:
    name: str
    rub: float


def _read_rows(csv_path: Path) -> list[list[str]]:
    with csv_path.open("r", encoding="utf-8", errors="replace", newline="") as f:
        return list(csv.reader(f))


def find_value_right(rows: list[list[str]], label: str) -> Optional[float]:
    target = _norm(label)
    for row in rows:
        for idx, cell in enumerate(row):
            if _norm(cell) == target:
                for cell2 in row[idx + 1 :]:
                    n = parse_ru_number(cell2)
                    if n is not None:
                        return n
                return None
    return None


def find_value_right_contains(rows: list[list[str]], label_substr: str) -> Optional[float]:
    target = _norm(label_substr)
    for row in rows:
        for idx, cell in enumerate(row):
            if target in _norm(cell):
                for cell2 in row[idx + 1 :]:
                    n = parse_ru_number(cell2)
                    if n is not None:
                        return n
                return None
    return None


def parse_days_expr(rows: list[list[str]], label_substr: str) -> Optional[int]:
    target = _norm(label_substr)
    for row in rows:
        if not any(target in _norm(c) for c in row):
            continue
        # Prefer something like "13+2"
        for cell in row:
            m = re.search(r"(\d+)\s*\+\s*(\d+)", cell)
            if m:
                return int(m.group(1)) + int(m.group(2))
        # Fallback: first number
        for cell in row:
            n = parse_ru_number(cell)
            if n is not None:
                return int(n)
    return None


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


def _find_row_index(rows: list[list[str]], label_exact: str) -> Optional[int]:
    target = _norm(label_exact)
    for idx, row in enumerate(rows):
        if row and _norm(row[0]) == target:
            return idx
    return None


def slice_capex(rows: list[list[str]]) -> tuple[list[Item], Optional[float]]:
    cap_start = _find_row_index(rows, "Кап затры")
    if cap_start is None:
        return [], None
    cap_start += 1

    cap_end = None
    stated_total = None
    for idx in range(cap_start, len(rows)):
        row = rows[idx]
        if row and _norm(row[0]) == _norm("Итого:"):
            cap_end = idx
            if len(row) >= 2:
                stated_total = parse_rub(row[1])
            break

    items: list[Item] = []
    if cap_end is not None:
        for row in rows[cap_start:cap_end]:
            it = parse_item_money(row)
            if it:
                items.append(it)
    return items, stated_total


def slice_opex(rows: list[list[str]]) -> tuple[list[Item], Optional[float]]:
    o_start = None
    for idx, row in enumerate(rows):
        if row and "операционные" in _norm(row[0]):
            o_start = idx + 1
            break
    if o_start is None:
        return [], None

    # Opex items end at the next "Итого:".
    o_end = None
    for idx in range(o_start, len(rows)):
        row = rows[idx]
        if row and _norm(row[0]) == _norm("Итого:"):
            o_end = idx
            break
    if o_end is None:
        o_end = len(rows)

    items: list[Item] = []
    stated_subtotal = None
    for row in rows[o_start:o_end]:
        it = parse_item_money(row)
        if it:
            items.append(it)
        # Some sheets include a subtotal row with empty name and just a rub amount in column 2.
        if (len(row) >= 2) and (not row[0].strip()) and MONEY_RE.search(row[1] or ""):
            val = parse_rub(row[1])
            if val is not None:
                stated_subtotal = val
    return items, stated_subtotal


def safe_div(a: float, b: float) -> Optional[float]:
    if b == 0:
        return None
    return a / b


def fmt(x: Optional[float], digits: int = 2) -> str:
    if x is None or (isinstance(x, float) and (math.isnan(x) or math.isinf(x))):
        return "n/a"
    return f"{x:,.{digits}f}".replace(",", " ")


def main() -> None:
    here = Path(__file__).resolve().parent
    csv_path = here / "sheet2.csv"
    out_report = here / "report.md"
    out_metrics = here / "metrics.json"
    out_capex_csv = here / "capex_breakdown.csv"
    out_opex_csv = here / "opex_breakdown.csv"

    rows = _read_rows(csv_path)

    raw_kg = find_value_right(rows, "Срезано цветов с поля всего, (кг):")
    oil_l = find_value_right(rows, "Произведено масла, (л):")
    oil_kg = find_value_right(rows, "Выход масла фактический, (кг):")
    hydrolat_l = find_value_right(rows, "Произведено гидролат, (л):")
    distillations = find_value_right(rows, "Количесво дистилляций:")
    workdays = parse_days_expr(rows, "Количесво рабочих дней")
    gas_cyl = find_value_right_contains(rows, "газовых баллонов")
    water_m3 = find_value_right_contains(rows, "затраченой воды")
    yield_pct_reported = find_value_right_contains(rows, "Процент выхода масла фактический")
    loss_pct_reported = find_value_right_contains(rows, "Процент потерь")
    theoretical_oil_l = find_value_right_contains(rows, "Теоретический выход масла")

    capex_items, capex_stated = slice_capex(rows)
    opex_items, opex_stated = slice_opex(rows)

    capex_total_calc = sum(i.rub for i in capex_items)
    opex_total_calc = sum(i.rub for i in opex_items)

    total_stated = find_value_right(rows, "Итого:")  # first "Итого:" is capex; total is later
    # Find the second Итого: (overall total)
    overall_total_stated = None
    itogo_seen = 0
    for row in rows:
        if row and _norm(row[0]) == _norm("Итого:"):
            itogo_seen += 1
            if itogo_seen == 2 and len(row) >= 2:
                overall_total_stated = parse_rub(row[1])
                break

    # Core ratios
    oil_density_kg_per_l = safe_div(oil_kg, oil_l) if (oil_kg and oil_l) else None
    oil_kg_per_raw_kg = safe_div(oil_kg, raw_kg) if (oil_kg and raw_kg) else None
    oil_l_per_raw_kg = safe_div(oil_l, raw_kg) if (oil_l and raw_kg) else None
    raw_kg_per_oil_kg = safe_div(raw_kg, oil_kg) if (raw_kg and oil_kg) else None
    raw_kg_per_oil_l = safe_div(raw_kg, oil_l) if (raw_kg and oil_l) else None
    hydrolat_l_per_raw_kg = safe_div(hydrolat_l, raw_kg) if (hydrolat_l and raw_kg) else None
    hydrolat_l_per_oil_l = safe_div(hydrolat_l, oil_l) if (hydrolat_l and oil_l) else None

    # Time/process metrics
    distillations_per_day = safe_div(distillations, workdays) if (distillations and workdays) else None
    raw_kg_per_dist = safe_div(raw_kg, distillations) if (raw_kg and distillations) else None
    oil_kg_per_dist = safe_div(oil_kg, distillations) if (oil_kg and distillations) else None
    oil_l_per_dist = safe_div(oil_l, distillations) if (oil_l and distillations) else None
    hydrolat_l_per_dist = safe_div(hydrolat_l, distillations) if (hydrolat_l and distillations) else None
    gas_cyl_per_dist = safe_div(gas_cyl, distillations) if (gas_cyl and distillations) else None
    water_m3_per_dist = safe_div(water_m3, distillations) if (water_m3 and distillations) else None

    # Costs
    capex = capex_stated if capex_stated is not None else capex_total_calc
    opex = opex_stated if opex_stated is not None else opex_total_calc
    total = overall_total_stated if overall_total_stated is not None else (capex + opex)

    opex_rub_per_raw_kg = safe_div(opex, raw_kg) if (raw_kg and opex is not None) else None
    total_rub_per_raw_kg = safe_div(total, raw_kg) if (raw_kg and total is not None) else None

    # Two allocation strategies:
    # A) 100% costs to oil (useful for "сколько стоит 1 кг масла как основной продукт")
    opex_rub_per_oil_kg_all_to_oil = safe_div(opex, oil_kg) if (opex and oil_kg) else None
    total_rub_per_oil_kg_all_to_oil = safe_div(total, oil_kg) if (total and oil_kg) else None
    opex_rub_per_oil_l_all_to_oil = safe_div(opex, oil_l) if (opex and oil_l) else None
    total_rub_per_oil_l_all_to_oil = safe_div(total, oil_l) if (total and oil_l) else None

    # B) 50/50 split between oil and hydrolat (as implied by the sheet totals 141 407 and 88 927)
    # Split uses total and opex in half.
    opex_half = opex / 2 if opex is not None else None
    total_half = total / 2 if total is not None else None
    opex_rub_per_oil_l_split50 = safe_div(opex_half, oil_l) if (opex_half and oil_l) else None
    total_rub_per_oil_l_split50 = safe_div(total_half, oil_l) if (total_half and oil_l) else None
    opex_rub_per_hydrolat_l_split50 = safe_div(opex_half, hydrolat_l) if (opex_half and hydrolat_l) else None
    total_rub_per_hydrolat_l_split50 = safe_div(total_half, hydrolat_l) if (total_half and hydrolat_l) else None

    metrics = {
        "source_file": str(csv_path),
        "raw_kg": raw_kg,
        "oil_l": oil_l,
        "oil_kg": oil_kg,
        "hydrolat_l": hydrolat_l,
        "theoretical_oil_l": theoretical_oil_l,
        "distillations": distillations,
        "workdays": workdays,
        "gas_cylinders": gas_cyl,
        "water_m3": water_m3,
        "yield_pct_reported": yield_pct_reported,
        "loss_pct_reported": loss_pct_reported,
        "capex_items": [i.__dict__ for i in capex_items],
        "opex_items": [i.__dict__ for i in opex_items],
        "capex_total_calc": capex_total_calc,
        "opex_total_calc": opex_total_calc,
        "capex_total_stated": capex_stated,
        "opex_total_stated": opex_stated,
        "total_cost_stated": overall_total_stated,
        "derived": {
            "oil_density_kg_per_l": oil_density_kg_per_l,
            "oil_kg_per_raw_kg": oil_kg_per_raw_kg,
            "oil_l_per_raw_kg": oil_l_per_raw_kg,
            "raw_kg_per_oil_kg": raw_kg_per_oil_kg,
            "raw_kg_per_oil_l": raw_kg_per_oil_l,
            "hydrolat_l_per_raw_kg": hydrolat_l_per_raw_kg,
            "hydrolat_l_per_oil_l": hydrolat_l_per_oil_l,
            "distillations_per_day": distillations_per_day,
            "raw_kg_per_dist": raw_kg_per_dist,
            "oil_kg_per_dist": oil_kg_per_dist,
            "oil_l_per_dist": oil_l_per_dist,
            "hydrolat_l_per_dist": hydrolat_l_per_dist,
            "gas_cyl_per_dist": gas_cyl_per_dist,
            "water_m3_per_dist": water_m3_per_dist,
            "opex_rub_per_raw_kg": opex_rub_per_raw_kg,
            "total_rub_per_raw_kg": total_rub_per_raw_kg,
            "opex_rub_per_oil_kg_all_to_oil": opex_rub_per_oil_kg_all_to_oil,
            "total_rub_per_oil_kg_all_to_oil": total_rub_per_oil_kg_all_to_oil,
            "opex_rub_per_oil_l_all_to_oil": opex_rub_per_oil_l_all_to_oil,
            "total_rub_per_oil_l_all_to_oil": total_rub_per_oil_l_all_to_oil,
            "opex_rub_per_oil_l_split50": opex_rub_per_oil_l_split50,
            "total_rub_per_oil_l_split50": total_rub_per_oil_l_split50,
            "opex_rub_per_hydrolat_l_split50": opex_rub_per_hydrolat_l_split50,
            "total_rub_per_hydrolat_l_split50": total_rub_per_hydrolat_l_split50,
        },
    }

    out_metrics.write_text(json.dumps(metrics, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Breakdown CSVs
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

    # Report (RU, concise and oriented for budgeting)
    missing = []
    for k in ("raw_kg", "oil_l", "oil_kg", "hydrolat_l"):
        if metrics.get(k) is None:
            missing.append(k)

    notes = []
    if opex_stated is not None and abs(opex_total_calc - opex_stated) > 0.01:
        diff = opex_total_calc - opex_stated
        notes.append(
            f"- В CSV операционные статьи суммируются в {fmt(opex_total_calc, 2)} руб, "
            f"но в таблице указан итог {fmt(opex_stated, 2)} руб (разница {fmt(diff, 2)} руб). "
            "Это совпадает с исключением строки 'Флаконы масла и гидролата (розница)'."
        )
    if theoretical_oil_l is not None and oil_l is not None:
        notes.append(
            f"- Теоретический выход масла: {fmt(theoretical_oil_l, 2)} л, фактический: {fmt(oil_l, 2)} л."
        )

    report = []
    report.append("# Аналитика по дистилляции (sheet2.csv)\n")
    if missing:
        report.append("## Предупреждение\n")
        report.append(f"Не удалось извлечь поля: {', '.join(missing)}\n")

    report.append("## Вход/выход\n")
    report.append(f"- Сырье (срезано), кг: {fmt(raw_kg, 0)}\n")
    report.append(f"- Масло, л: {fmt(oil_l, 0)}\n")
    report.append(f"- Масло, кг: {fmt(oil_kg, 2)}\n")
    report.append(f"- Гидролат, л: {fmt(hydrolat_l, 0)}\n")

    report.append("\n## Конверсия\n")
    report.append(f"- Выход масла: {fmt(oil_kg_per_raw_kg * 100 if oil_kg_per_raw_kg else None, 3)}% (кг масла / кг сырья)\n")
    report.append(f"- 1 кг сырья -> {fmt(oil_kg_per_raw_kg * 1000 if oil_kg_per_raw_kg else None, 2)} г масла\n")
    report.append(f"- 1 кг масла требует ~{fmt(raw_kg_per_oil_kg, 1)} кг сырья\n")
    report.append(f"- 1 л масла требует ~{fmt(raw_kg_per_oil_l, 1)} кг сырья\n")
    report.append(f"- Плотность (по данным): {fmt(oil_density_kg_per_l, 3)} кг/л\n")
    report.append(f"- 1 кг сырья -> {fmt(hydrolat_l_per_raw_kg, 3)} л гидролата\n")
    report.append(f"- 1 л масла -> {fmt(hydrolat_l_per_oil_l, 2)} л гидролата\n")

    report.append("\n## Процесс\n")
    report.append(f"- Дистилляций: {fmt(distillations, 0)}\n")
    report.append(f"- Рабочих дней: {workdays if workdays is not None else 'n/a'}\n")
    report.append(f"- Дистилляций/день: {fmt(distillations_per_day, 2)}\n")
    report.append(f"- Сырье/дистилляцию: {fmt(raw_kg_per_dist, 1)} кг\n")
    report.append(f"- Масло/дистилляцию: {fmt(oil_kg_per_dist, 3)} кг ({fmt(oil_l_per_dist, 3)} л)\n")
    report.append(f"- Гидролат/дистилляцию: {fmt(hydrolat_l_per_dist, 2)} л\n")
    report.append(f"- Газовых баллонов/дистилляцию: {fmt(gas_cyl_per_dist, 3)}\n")
    report.append(f"- Воды/дистилляцию: {fmt(water_m3_per_dist, 3)} м3\n")
    report.append(f"- Процент выхода масла (как в таблице): {fmt(yield_pct_reported, 3)}%\n")
    report.append(f"- Потери из-за установки (как в таблице): {fmt(loss_pct_reported, 1)}%\n")

    report.append("\n## Затраты\n")
    report.append(f"- Капзатраты (итог): {fmt(capex, 2)} руб\n")
    report.append(f"- Операционные (итог): {fmt(opex, 2)} руб\n")
    report.append(f"- Всего: {fmt(total, 2)} руб\n")
    report.append(f"- Опер. на 1 кг сырья: {fmt(opex_rub_per_raw_kg, 2)} руб/кг\n")
    report.append(f"- Всего на 1 кг сырья: {fmt(total_rub_per_raw_kg, 2)} руб/кг\n")

    report.append("\n### Себестоимость масла (если все затраты отнести на масло)\n")
    report.append(f"- Опер.: {fmt(opex_rub_per_oil_kg_all_to_oil, 2)} руб/кг масла ({fmt(opex_rub_per_oil_l_all_to_oil, 2)} руб/л)\n")
    report.append(f"- Всего: {fmt(total_rub_per_oil_kg_all_to_oil, 2)} руб/кг масла ({fmt(total_rub_per_oil_l_all_to_oil, 2)} руб/л)\n")

    report.append("\n### Себестоимость при 50/50 разделении между маслом и гидролатом\n")
    report.append(f"- Масло (опер.): {fmt(opex_rub_per_oil_l_split50, 2)} руб/л\n")
    report.append(f"- Масло (всего): {fmt(total_rub_per_oil_l_split50, 2)} руб/л\n")
    report.append(f"- Гидролат (опер.): {fmt(opex_rub_per_hydrolat_l_split50, 2)} руб/л\n")
    report.append(f"- Гидролат (всего): {fmt(total_rub_per_hydrolat_l_split50, 2)} руб/л\n")

    report.append("\n## Опер. статьи (из CSV)\n")
    for it in opex_items:
        share = (it.rub / opex_total_calc * 100) if opex_total_calc else None
        report.append(f"- {it.name}: {fmt(it.rub, 2)} руб ({fmt(share, 1)}% от суммы статей)\n")

    if notes:
        report.append("\n## Заметки по данным\n")
        report.extend([n + "\n" for n in notes])

    out_report.write_text("".join(report), encoding="utf-8")

    print(f"Wrote {out_report}")
    print(f"Wrote {out_metrics}")
    print(f"Wrote {out_capex_csv}")
    print(f"Wrote {out_opex_csv}")


if __name__ == "__main__":
    main()
