# MD Collection Template — Site Architecture & Design Brief

Шаблон и план сбора данных для создания архитектурно-дизайнового MD-документа по любому сайту.
Структура воспроизводит формат `cotswoldlavender_architecture_brief.md`.

---

## ПЛАН СБОРА ДАННЫХ (последовательность шагов)

### Шаг 1 — Открыть сайт и сделать скриншот

```js
// Инструменты: mcp__chrome-devtools__navigate_page + take_screenshot
navigate_page(url)
take_screenshot()                // визуальное первое впечатление
```

---

### Шаг 2 — Собрать данные главной страницы (один большой скрипт)

```js
evaluate_script(() => {
  // CSS переменные бренда
  const getAllCSSVars = () => { /* loop through :root styleSheets */ }

  // Стили ключевых элементов
  const getEl = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const s = getComputedStyle(el);
    return { fontFamily, fontSize, fontWeight, color, backgroundColor, lineHeight, letterSpacing }
  }

  return {
    title: document.title,
    url: window.location.href,
    // Структура
    headings: querySelectorAll('h1,h2,h3,h4') → {tag, text}
    navLinks: querySelectorAll('nav a, header a, [role="navigation"] a') → {text, href}
    allLinks: querySelectorAll('a') → {text, href}
    buttons: querySelectorAll('button, .btn, input[type="submit"]') → {text, class}
    // Дизайн
    cssVars: getAllCSSVars()
    fonts: уникальные fontFamily из h1,h2,h3,p,a,button
    h1Style: getEl('h1')
    h2Style: getEl('h2')
    bodyStyle: getEl('body')
    navStyle: getEl('nav') || getEl('header')
    btnStyle: getEl('.btn') || getEl('button') || getEl('.button--primary')
    // Контент
    bodyText: document.body.innerText.substring(0, 6000)
  }
})
```

**Что извлекаем:**
- Все заголовки H1–H4 → структура страницы
- Навигационные ссылки → карта сайта
- Все ссылки → обнаружение скрытых страниц
- Кнопки → CTA анализ
- CSS-переменные → цветовая система, шрифты, анимации
- Computed styles → точные значения типографики

---

### Шаг 3 — Обойти все страницы (по одной, collect data)

Для каждой страницы из навигации:

```js
navigate_page(url)
evaluate_script(() => ({
  title: document.title,
  headings: querySelectorAll('h1,h2,h3,h4') → {tag, text}
  formFields: querySelectorAll('input,textarea,select') → {tag, type, name, placeholder}
  buttons: querySelectorAll('button, input[type="submit"]') → {text}
  allLinks: querySelectorAll('a') → {text, href}   // ищем скрытые страницы
  bodyText: document.body.innerText.substring(0, 4000–6000)
}))
```

**Порядок обхода:**
1. Главная страница (`/`) — уже сделана в шаге 2
2. Все пункты основной навигации
3. Подпункты dropdown-меню
4. Страницы из footer
5. Страницы найденные в `allLinks` (скрытые, не в nav)
6. Страницы магазина: `/collections/all` + каждая категория
7. Одна страница продукта (для понимания product page layout)
8. Страница корзины (`/cart`) — если нужно

---

### Шаг 4 — Специальные данные для e-commerce сайтов

```js
// Страница /collections/all
evaluate_script(() => ({
  products: querySelectorAll('h3 a, .card__heading a') → {text, href, price}
  filters: querySelectorAll('[data-filter], .facets label') → text
  totalCount: текст "X products"
}))
```

---

### Шаг 5 — Контактная страница — собрать форму

```js
evaluate_script(() => ({
  formFields: querySelectorAll('input,textarea,select') → {tag, type, name, placeholder, label}
  buttons: querySelectorAll('button, input[type="submit"]') → {text}
}))
```

---

## СТРУКТУРА MD-ДОКУМЕНТА

### Шапка файла

```md
# [Название сайта] — Site Architecture & Design Brief

**URL:** https://...
**Platform:** WordPress / Shopify / Wix / Custom
**Business:** [Описание бизнеса одной строкой]
**Address / Location:** [Физический адрес]
**Contact:** [телефон · email]
**Legal:** [Company No., VAT, торговая марка]
**Season / Hours:** [если применимо]
**Social:** [Facebook · Instagram · TikTok · Pinterest · X]
```

---

### PART I — SITE ARCHITECTURE

#### 1. Site Map (Full Structure)
```
domain.com/
│
├── /                           → Homepage
├── SECTION (тип: shop/info/visit):
│   ├── /url-1                  → Название страницы
│   └── /url-2                  → Название страницы
│       └── /url-2/sub          → Подстраница
│
External links:
├── https://social-1.com/...
└── https://social-2.com/...
```

**Правила карты:**
- Группировать по секциям (Shop, Visit, About, Info, Policies)
- Указывать тип каждой секции: Shopify collections, static pages, WordPress posts, Wix pages
- Внешние ссылки (соцсети, Etsy, Eventbrite) — отдельным блоком
- Скрытые страницы (не в nav, найдены в теле) — отмечать `// not in nav`

---

#### 2. Global Layout

**Announcement Bar** (если есть)
| Element | Content |
|---|---|
| Текст/ссылка | Что написано |

**Header / Navigation**
| Element | Description |
|---|---|
| Logo | Тип (image/text), куда ведёт |
| Search | Есть/нет |
| Account | Есть/нет |
| Cart | Тип (icon/drawer/page) |

**Primary Navigation**
| Item | Submenu items | URL |
|---|---|---|
| ... | ... | ... |

> Тип: flat / dropdown / mega-menu / drawer

**Footer**
| Column/Element | Links / Content |
|---|---|
| Column 1 | ... |
| Newsletter | Форма (поля) |
| Social | Список иконок |
| Legal | Copyright, policy links |

---

#### 3. Pages — Detailed Description (для каждой страницы)

```md
#### N. Название страницы (`/url`)
**Title:** [document.title]

| Block | Type | Content |
|---|---|---|
| H1 "..." | Heading | [что это значит для UX] |
| Intro text | Text | [суть контента] |
| CTA section | Button | [текст кнопки → куда ведёт] |
| Form | Form | [поля] |
| Product grid | Grid | [кол-во, тип карточек] |
| Map | Embed | [Google Maps / Mapbox] |

#### Clickable Elements (для каждой страницы)
| Element | Action |
|---|---|
| "Кнопка" | → /url или external |
```

**Что фиксировать обязательно:**
- Каждый заголовок H1–H4 и его UX-роль (hero, section, eyebrow, label)
- Каждый CTA: текст, цвет/стиль, куда ведёт
- Форма: все поля + submit action
- Таблицы с данными (цены, расписание, FAQ-вопросы)
- Специальные виджеты (map, video, carousel, reviews, booking)
- Внешние интеграции (Eventbrite, Etsy, Klaviyo, Ecwid, HelpfulCrowd)

---

#### 4. User Flow Architecture

```md
### User Flow Architecture

\`\`\`
Homepage (/)
    │
    ├─[CTA кнопка]────────────────────→ /destination
    │                                        └─[sub-action] → ...
    │
    └─[другой CTA]────────────────────→ /destination-2

All pages:
    ├─[Social icon]──→ external URL
    └─[Footer link]──→ /policy-page
\`\`\`
```

---

### PART II — TECHNICAL DESIGN BRIEF

#### 1. Colour System

**Источник данных:** CSS-переменные из `:root` + computed styles

```md
| Step | Hex | CSS Variable | Role |
|---|---|---|---|
| 50  | #... | --color-X-50  | Page bg, lightest tint |
| 500 | #... | --color-X-500 | Mid accent |
| 900 | #... | --color-X-900 | Deepest text, footer |
```

**Что фиксировать:**
- Название цветового семейства (purple / indigo / green / neutral)
- Количество шагов в шкале
- Semantic aliases (body text, muted text, link, button, border)
- Есть ли secondary accent цвет
- Принцип применения (scroll-based deepening / alternating / flat)

---

#### 2. Typography

**Источник данных:** `--font-body-family`, `--font-heading-family` + computed getEl()

```md
| Role | Family | Weight | Size | Line-height | Letter-spacing | Colour |
|---|---|---|---|---|---|---|
| H1 | ... | ... | ...px | ... | ... | ... |
| H2 | ... | ... | ...px | ... | ... | ... |
| Body | ... | ... | 16px | ... | ... | rgba(18,18,18,0.75) |
| Button | ... | ... | ...px | ... | ... | ... |
| Nav | ... | ... | ...px | ... | ... | ... |
```

**Что фиксировать:**
- Количество шрифтовых семейств (1 / 2 / 3+)
- Display/editorial vs. UI typeface
- Загрузка: Google Fonts / Adobe Fonts (ivymode, GTStandard) / system
- Italic использование
- Tracking (letter-spacing) характер: tight / loose / normal
- Принцип веса: фиксированный / контекстный

---

#### 3. Layout

```md
| Parameter | Value |
|---|---|
| Max page width | Xrem (Xpx) |
| Section spacing | Xpx desktop / Xpx mobile |
| Grid gap | Xpx |
| Card corner radius | 0px / Xpx / Xrem |
| Button radius | 0px / Xpx |
| Input radius | 0px / Xpx |
| Nav height | ~Xpx |
```

---

#### 4. Navigation Behaviour

```md
| State | Behaviour |
|---|---|
| Default | Transparent / white / coloured |
| On scroll | Glass / solid / no change |
| Mobile | Drawer / bottom bar / hamburger |
| Cart | Icon count / drawer / page |
| Dropdowns | Mega-menu / sub-list / none |
```

---

#### 5. Interactive Elements & Buttons

```md
| Variant | Class | Style | Usage |
|---|---|---|---|
| Primary | .button--primary | solid fill | main CTA |
| Secondary | .button--secondary | outlined | secondary |
| Text | .link | underline | inline |
```

**Animation system:**
```md
| Variable | Value | Usage |
|---|---|---|
| --duration-default | 0.2s | hover/focus |
| --duration-long | 0.5s | reveals |
| --ease-out-slow | cubic-bezier(...) | primary easing |
| --animation-slide-in | ... | scroll reveal |
```

---

#### 6. Page Section Structure (Scroll Narrative)

```md
| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Hero | Full-bleed photo + white text | Aspirational |
| Section 2 | White bg + text | Informational |
| CTA | Dark bg | Conversion |
| Footer | Darkest | Closure |
```

**Ключевой вопрос:** Как меняется цвет/тон по мере скролла вниз?
- Chromatic crescendo (светло→темно) — как у tonal-style.md
- Alternate (светло/темно чередуются)
- Flat (всё белое)

---

#### 7. Photography & Visual Motif

```md
| Motif | Description |
|---|---|
| Hero | Стиль фото, настроение, кадрирование |
| Products | Фон, стиль |
| Brand motif | Есть ли паттерн / иллюстрации / иконки |
| Video | Есть ли видео, тип embed |
```

---

#### 8. E-Commerce Components (если Shopify/Ecwid/WooCommerce)

```md
| Component | Description |
|---|---|
| Product card | Стиль карточки, что показывает |
| Cart | Drawer / page |
| Filters | Типы фильтров |
| Reviews | Платформа (Klaviyo / HelpfulCrowd / Google) |
| Booking | Система (Wix Bookings / Eventbrite / custom) |
```

---

#### 9. Key Brand Signals

```md
| Signal | Implementation |
|---|---|
| Heritage | "X лет работы", цитаты основателей |
| Organic/Sustainable | Слова, сертификаты, страница экологии |
| Local / Place | Название региона в каждом заголовке |
| Famous clients | Упоминание брендов / медиа |
| Awards | Конкретные награды с годом |
| Social proof | Reviews, Instagram feed, UGC |
```

---

#### 10. Comparative Notes (vs. tonal-style.md или предыдущие сайты)

```md
| Dimension | Reference site | This site |
|---|---|---|
| Colour family | ... | ... |
| Typography | ... | ... |
| Layout | ... | ... |
| Navigation | ... | ... |
| Animations | ... | ... |
| Key difference | ... | ... |
```

---

## ЧЕКЛИСТ ПЕРЕД СОХРАНЕНИЕМ ФАЙЛА

- [ ] Все страницы из навигации посещены
- [ ] Footer-страницы (policies, cookie, photo policy) включены в карту
- [ ] Скрытые страницы (найденные в теле) добавлены в карту с пометкой `// not in nav`
- [ ] CSS-переменные собраны и интерпретированы
- [ ] Computed styles для H1, H2, body, button собраны
- [ ] Шрифты определены (Google/Adobe/system)
- [ ] Pricing таблицы выписаны с точными суммами и условиями
- [ ] FAQ вопросы перечислены (хотя бы заголовки)
- [ ] Форма: все поля + submit action
- [ ] E-commerce: полный каталог продуктов с ценами и статусом
- [ ] Comparative table заполнена относительно предыдущих сайтов
- [ ] Файл назван: `{sitename}_architecture_brief.md`

---

## ШАБЛОН ИМЕНИ ФАЙЛА

```
{domain-без-www-и-расширения}_architecture_brief.md
```

Примеры:
- `cotswoldlavender_architecture_brief.md`
- `lavenderfieldsforever_architecture_brief.md`
- `bluemountainlavender_site_architecture.md`
- `daisyshop_site_architecture.md`

---

## ИНСТРУМЕНТЫ (последовательность вызовов)

```
1. mcp__chrome-devtools__new_page(url)         — открыть сайт
2. mcp__chrome-devtools__take_screenshot()     — скриншот для визуального анализа
3. evaluate_script(БОЛЬШОЙ_СКРИПТ)             — homepage: всё сразу
4. navigate_page(url) → evaluate_script()      — каждая страница
   [повторить для всех страниц]
5. Write(file_path, content)                   — сохранить MD файл
```

**Порядок приоритетов при сборе:**
1. Навигация (карта сайта)
2. Дизайн-переменные (CSS vars, computed styles)
3. Главная страница (блоки, CTA, контент)
4. Ключевые страницы (Visit/About/Contact/Shop)
5. Вспомогательные страницы (FAQ/Delivery/Policies)
6. E-commerce (каталог, цены, фильтры)

---

## ПАРАМЕТРЫ ДЛЯ СРАВНИТЕЛЬНОГО АНАЛИЗА (используются при обобщении)

При создании финального типового сайта сравнивать по этим осям:

| Ось | Что анализировать |
|---|---|
| **Цветовая схема** | Монохром / дополнительные / нейтральная? Сколько шагов? |
| **Шрифты** | Сколько семейств? Display+UI или один? Serif/Sans? |
| **Навигация** | Flat / dropdown / mega / drawer? Кол-во пунктов? |
| **Hero** | Full-bleed фото / видео / slideshow / illustration? |
| **Scroll narrative** | Тон темнеет / чередуется / плоский? |
| **CTA паттерн** | Где главный CTA? Цвет? Текст? |
| **E-commerce** | Платформа? Кол-во SKU? Категорий? |
| **Social proof** | Тип reviews? Где на странице? |
| **Passes/Tickets** | Тип ценообразования посещения? |
| **Events** | Интеграция с Eventbrite / собственная / none? |
| **Wholesale** | Отдельная страница / форма / отсутствует? |
| **Environmental** | Отдельная страница / блок / отсутствует? |
| **Newsletter** | Footer / popup / sidebar / отсутствует? |
| **Photography policy** | Платные пропуска / бесплатно / запрещено? |
| **Seasonal content** | Как обозначают закрытый сезон? |
