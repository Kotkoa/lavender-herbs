# План: возврат поддержки сайта на Stripe

Модель: добровольная поддержка через Stripe Payment Link, без обязательств перед поддерживающими.
Слово «займы» не используем ни в Stripe, ни на сайте: Stripe запрещает lending services.

## Состояние аккаунтов

- `acct_1UFxJlEbCLGxJE3e` — Kotkoa Ko-fi: рабочий аккаунт сайта (Payment Link + webhook) и одновременно выплаты Ko-fi.
- `acct_1TIrYIHVza3K996l` — Lavender Herbs – Site: прежний аккаунт сайта; его Payment Link и webhook отключены.
- `acct_1TIrYUQkDnBeUJzD` — Lavender Herbs – Sandbox: тестовый аккаунт.
- `acct_1UFxA0JZO64Zj4Wa` — Lavender Herbs – Buy Me a Coffee: прежний BMC-путь, к закрытию.

## Stripe-объекты сайта (аккаунт Kotkoa Ko-fi, live)

- Product «Lavender field bush», €1.00 EUR, разовый.
- Payment Link `plink_1UJYUEEbCLGxJE3eJWIniNly` — `https://buy.stripe.com/7sY8wPcZO9gN7gt5d99AA00`:
  количество выбирает покупатель (1–10000), авто-налог выключен, после оплаты — редирект на `https://lavenderherbs.org/donate`.
- Webhook `we_1UJYVqEbCLGxJE3eQLZRRwY5` («lavenderherbs-supabase»), API `2026-08-26.dahlia`:
  `https://uiixexvzjpjfuyoigmdf.supabase.co/functions/v1/stripe-webhook`,
  события `checkout.session.completed`, `checkout.session.async_payment_succeeded`.
- Adaptive Pricing включён: покупатель может платить в своей валюте; webhook считает по исходной EUR-цене.
- Webhook засчитывает только сессии Payment Link `plink_1UJYUEEbCLGxJE3eJWIniNly` (константа `SITE_PAYMENT_LINK`
  в `stripe-webhook`): аккаунт общий с Ko-fi. При замене Payment Link обновить константу и передеплоить функцию.

## Часть A. Настройка секретов (выполнено 2026-09-25)

- [x] Restricted key (Stripe → Kotkoa Ko-fi → Developers → API keys), права: Checkout Sessions — Read
      → Supabase secret `STRIPE_SECRET_KEY`.
- [x] Signing secret (Workbench → Webhooks → `lavenderherbs-supabase`) → Supabase secret `STRIPE_WEBHOOK_SECRET`.
- Секреты не коммитить и не помещать в GitHub Variables.

## Часть B. Реализация

- [x] Frontend снова использует `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` и CTA Stripe.
- [x] Ko-fi CTA, iframe, client helper и Ko-fi Edge Function удалены из активного кода.
- [x] Stripe webhook проверяет подпись до обработки, принимает только оплаченные EUR Checkout Sessions
      (с учётом Adaptive Pricing), обрабатывает delayed-payment success и идемпотентно вызывает RPC с `source = 'stripe'`.
- [x] GitHub Actions передаёт только публичные переменные Supabase и Payment Link.
- [x] Payment Link и webhook endpoint созданы в Kotkoa Ko-fi; GitHub Variable указывает на новый Payment Link.
- [x] Supabase secrets `STRIPE_SECRET_KEY` (restricted, Checkout Sessions read), `STRIPE_WEBHOOK_SECRET` установлены.
- [x] Live-платёж €1 (2026-09-25): Stripe → webhook `200`, запись `source = 'stripe'`, qty 1, 100 центов;
      счётчик 0 → 1 куст, 1 донор; редирект на `/donate` работает.

## База и безопасность

Исторические миграции `002_kofi_source.sql` и `003_cleanup_kofi_webhook_test.sql` остаются в репозитории как уже применённая история.
Текущий RPC принимает `process_donation(ext_id, src, qty, cents, donor)`; доступ к нему остаётся только у `service_role`.
Счётчик не меняется при повторной доставке одного Checkout Session ID.

## Налоги

Как учитывать поддержку автономо (IRPF / IVA) — вопрос к gestor, не к Stripe.
