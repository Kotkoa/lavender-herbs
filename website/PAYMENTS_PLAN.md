# План: возврат поддержки сайта на Stripe

Модель: добровольная поддержка через Stripe Payment Link, без обязательств перед поддерживающими.
Слово «займы» не используем ни в Stripe, ни на сайте: Stripe запрещает lending services.

## Состояние аккаунтов

- `acct_1TIrYIHVza3K996l` — Lavender Herbs – Site: рабочий аккаунт сайта, Payment Link и webhook.
- `acct_1TIrYUQkDnBeUJzD` — Lavender Herbs – Sandbox: тестовый аккаунт.
- `acct_1UFxJlEbCLGxJE3e` — Kotkoa Ko-fi: прежний Ko-fi-путь; не используется сайтом после возврата на Stripe.
- `acct_1UFxA0JZO64Zj4Wa` — Lavender Herbs – Buy Me a Coffee: прежний BMC-путь.

## Часть A. Ручные шаги

1. В Stripe Dashboard открыть аккаунт **Lavender Herbs – Site**.
2. Активировать прежний Payment Link `plink_1TIsohHVza3K996l3bCLUcOY`, если он сохранил нужный товар и валюту EUR.
3. В Developers → Webhooks включить или создать endpoint:
   `https://uiixexvzjpjfuyoigmdf.supabase.co/functions/v1/stripe-webhook`.
   События: `checkout.session.completed`, `checkout.session.async_payment_succeeded`.
4. Передать основной агенту новый signing secret этого endpoint и секретный Stripe API key безопасным способом;
   значения не коммитить и не помещать в GitHub Variables.
5. После публикации провести один тестовый платёж и подтвердить его агенту.
6. После подтверждения Stripe можно удалить Ko-fi webhook/function/secret вручную, если они больше не нужны.

## Часть B. Реализация

- [x] Frontend снова использует `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` и CTA Stripe.
- [x] Ko-fi CTA, iframe, client helper и Ko-fi Edge Function удалены из активного кода.
- [x] Stripe webhook проверяет подпись до обработки, принимает только оплаченные EUR Checkout Sessions,
      обрабатывает delayed-payment success и идемпотентно вызывает RPC с `source = 'stripe'`.
- [x] GitHub Actions передаёт только публичные переменные Supabase и Payment Link.
- [ ] Stripe Payment Link активирован, endpoint настроен и secrets установлены.
- [ ] Stripe webhook доставлен в Supabase и тестовый платёж увеличил счётчик ровно один раз.

## База и безопасность

Исторические миграции `002_kofi_source.sql` и `003_cleanup_kofi_webhook_test.sql` остаются в репозитории как уже применённая история.
Текущий RPC принимает `process_donation(ext_id, src, qty, cents, donor)`; доступ к нему остаётся только у `service_role`.
Счётчик не меняется при повторной доставке одного Checkout Session ID.

## Налоги

Как учитывать поддержку автономо (IRPF / IVA) — вопрос к gestor, не к Stripe.
