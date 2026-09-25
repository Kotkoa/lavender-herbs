# План: переход поддержки сайта на Ko-fi

Модель: добровольные чаевые через Ko-fi (`https://ko-fi.com/kotkoa`), без обязательств перед поддерживающими.
Слово «займы» не используем ни в Stripe, ни на сайте: Stripe запрещает lending services.

## Уже сделано (2026-09-25)

- [x] Stripe-аккаунты переименованы (внутреннее Account name):
  - `acct_1TIrYIHVza3K996l` — Lavender Herbs – Site (Payment Link + webhook сайта)
  - `acct_1TIrYUQkDnBeUJzD` — Lavender Herbs – Sandbox
  - `acct_1UFxJlEbCLGxJE3e` — Kotkoa Ko-fi
  - `acct_1UFxA0JZO64Zj4Wa` — Lavender Herbs – Buy Me a Coffee
- [x] Public details аккаунта Kotkoa Ko-fi: имя `Kotkoa`, сайт и support URL `https://ko-fi.com/kotkoa`,
  support email `kotkoa@gmail.com`, statement descriptor `KOTKOA`.
- [x] Product description аккаунта Kotkoa Ko-fi (industry без изменений, «Other digital goods»):
  > Andriy Kotko (Kotkoa), independent software developer in Spain. I publish free content — programming
  > projects, microstock content developing, blog posts, travel notes and a lavender growing project — and
  > receive voluntary tips and commercial payments.

  Несмотря на предупреждение Stripe «Shared legal entity», описание сохранилось только в Kotkoa Ko-fi;
  у Site, Buy Me a Coffee и Sandbox осталось старое («We sell digital content…»).

## Часть A. Ваши шаги (по порядку)

1. [x] **Описание в аккаунте Site** — вписан тот же текст, что в Kotkoa Ko-fi (сайт аккаунта остаётся `kotkoa.com`).
2. **Ko-fi, настройки (5 мин).**
   - [x] Валюта: EUR. Webhook засчитывает только платежи в EUR.
   - Contributor status выключить: `https://ko-fi.com/settings?tab=payment` → переключатель **Contributor** → off.
   - About: на `ko-fi.com/kotkoa` карандаш у блока **About** → добавить строку про лавандовый проект
     и ссылку `https://lavenderherbs.org` → Save.
3. **Buy Me a Coffee (5 мин, необратимо).**
   - `buymeacoffee.com` → войти → Settings → Payouts (или Payments) → Stripe → **Disconnect**.
   - `dashboard.stripe.com` → переключатель аккаунтов → «Lavender Herbs – Buy Me a Coffee» → Settings → Business →
     Account details → внизу **Close account**.
4. [x] **Ko-fi webhook** — URL и `KOFI_VERIFICATION_TOKEN` настроены. Проверено тестами Ko-fi:
   «single tip test» → +3 куста, «shop order test» не засчитан. Тестовая запись удалена, счётчик = 0.
5. **Доступ агента к Stripe (по желанию, 2 мин).** Сейчас у агента есть запись в 3 live-аккаунта.
   `/mcp reauth stripe:stripe` → отметить только «Lavender Herbs – Site» и «Lavender Herbs – Sandbox».

Налоги: как учитывать чаевые автономо (IRPF / IVA) — вопрос к gestor, не к Stripe.

## Часть B. Правки сайта (делаю я)

1. [x] **Миграция `002_kofi_source.sql`** — применена к базе. Заодно исправлено:
   в базе не было строки `donation_stats` (счётчик никогда не рос) и `process_donation` мог вызвать кто угодно
   (grant PUBLIC) — теперь только `service_role`.
2. [x] **Edge function `kofi-webhook`** — задеплоена; `stripe-webhook` передеплоена под новую сигнатуру RPC.
   Локальный прогон: верный токен → +3 куста за 3.50; повтор не считается; чужой токен → 401;
   Shop Order не считается; 0.50 → 1 куст; мусор в amount → 400.
3. [x] **Фронтенд** — кнопка «Tip on Ko-fi», тексты без обещаний посадки, `SuccessBanner` удалён,
   кнопки в меню и на главной: «Grow the Field».
4. [x] **Конфигурация и документация** — GitHub Variable `NEXT_PUBLIC_KOFI_URL` добавлена, `.env.local`,
   `deploy.yml`, `CLAUDE.md`, `WORKLOG.md` обновлены. Коммит `69374fe` запушен, сайт опубликован.
5. [x] **Отключение Stripe-пути.**
   - [x] Payment Link `plink_1TIsohHVza3K996l3bCLUcOY` деактивирован.
   - [x] Webhook `we_1TL90LHVza3K996lZORYt6eH` отключён (удалить через MCP нельзя — можно удалить в Dashboard).
   - [x] GitHub Variable `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` удалена, код `stripe-webhook` удалён из репозитория.
   - [ ] Вы, в Supabase Dashboard: удалить Edge Function `stripe-webhook` и секреты
     `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (у MCP нет операции удаления).
   - [x] Функция `stripe-webhook` удалена (проверено); секреты удалены вами.
