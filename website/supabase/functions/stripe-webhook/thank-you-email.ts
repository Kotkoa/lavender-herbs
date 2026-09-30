const SITE_URL = 'https://lavenderherbs.org'
const SUPPORT_EMAIL = 'support@lavenderherbs.org'

interface Wallpaper {
  title: string
  device: string
  file: string
  width: number
  height: number
  // Must match the file in website/public/wallpapers/.
  size: string
  preview: { file: string, width: number, height: number }
}

const WALLPAPERS: Wallpaper[] = [
  {
    title: 'Lavender Field — Desktop',
    device: 'For computer screens',
    file: 'lavender-field-desktop-5120x3413.jpg',
    width: 5120,
    height: 3413,
    size: '1.3 MB',
    preview: { file: 'lavender-field-desktop-preview.jpg', width: 96, height: 64 },
  },
  {
    title: 'Lavender Field — Phone',
    device: 'For phones and tablets',
    file: 'lavender-field-phone-1920x2880.jpg',
    width: 1920,
    height: 2880,
    size: '453 KB',
    preview: { file: 'lavender-field-phone-preview.jpg', width: 64, height: 96 },
  },
]

const FONT = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

// Checkout collects the cardholder name ("ANNA SMITH", "anna smith"); greet by a title-cased first word.
// Letters-only names need no HTML escaping.
function firstName(name: string | null | undefined): string | null {
  const first = name?.trim().split(/\s+/)[0]
  if (!first || !/^\p{L}[\p{L}'-]*$/u.test(first)) return null
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
}

function wallpaperUrl(file: string): string {
  return `${SITE_URL}/wallpapers/${file}`
}

function wallpaperRow(wallpaper: Wallpaper): string {
  const url = wallpaperUrl(wallpaper.file)
  return `
<tr>
  <td style="padding:0 0 16px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #d0bfff;border-radius:14px">
      <tr>
        <td width="96" align="center" valign="middle" style="padding:14px 0 14px 14px;width:96px">
          <a href="${url}"><img src="${wallpaperUrl(wallpaper.preview.file)}" width="${wallpaper.preview.width}" height="${wallpaper.preview.height}" alt="Preview of ${wallpaper.title}" style="display:block;border:0;border-radius:8px"></a>
        </td>
        <td valign="middle" style="padding:16px;font-family:${FONT}">
          <p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#5f3dc4">${wallpaper.title}</p>
          <p style="margin:0 0 2px;font-size:13px;color:#845ef7">${wallpaper.device}</p>
          <p style="margin:0 0 2px;font-size:13px;color:#6741d9">JPG · ${wallpaper.width} × ${wallpaper.height} px · ${wallpaper.size}</p>
          <p style="margin:0 0 12px;font-size:12px;color:#845ef7;word-break:break-all">${wallpaper.file}</p>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#5f3dc4;border-radius:999px">
              <a href="${url}" style="display:inline-block;padding:9px 16px;font-family:${FONT};font-size:13px;font-weight:700;color:#f3f0ff;text-decoration:none;white-space:nowrap">Download · ${wallpaper.size}</a>
            </td>
          </tr></table>
        </td>
      </tr>
    </table>
  </td>
</tr>`
}

export function renderThankYouEmail(input: { name: string | null | undefined, bushes: number }) {
  const name = firstName(input.name)
  const greeting = name ? `Thank you, ${name}.` : 'Thank you.'
  const bushes = `${input.bushes} ${input.bushes === 1 ? 'bush' : 'bushes'}`
  const subject = 'Thank you for supporting the lavender field'

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f3f0ff">
<div style="display:none;max-height:0;overflow:hidden">Your support helps the lavender field grow. Two wallpapers are waiting inside.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f0ff">
  <tr>
    <td align="center" style="padding:24px 12px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;border-radius:20px;overflow:hidden;background:#f3f0ff">
        <tr>
          <td><img src="${wallpaperUrl('lavender-field-desktop-preview.jpg')}" width="600" alt="Lavender field" style="display:block;width:100%;max-width:600px;height:auto;border:0"></td>
        </tr>
        <tr>
          <td style="padding:32px 28px 28px;font-family:${FONT};background:#f3f0ff">
            <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#845ef7">Lavender Herbs</p>
            <h1 style="margin:0 0 18px;font-size:32px;line-height:1.15;font-weight:300;color:#5f3dc4">${greeting}</h1>
            <p style="margin:0 0 14px;font-size:16px;line-height:1.65;color:#5f3dc4">We are truly grateful for your contribution. Support like yours helps us prepare the land and grow our lavender field — from the soil up to the young plants.</p>
            <p style="margin:0;font-size:16px;line-height:1.65;color:#5f3dc4">Your payment added <strong>${bushes}</strong> to the public field counter. You can watch the field fill up at <a href="${SITE_URL}/donate" style="color:#7048e8;font-weight:600">lavenderherbs.org/donate</a>.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 20px 12px;background:#e5dbff;font-family:${FONT}">
            <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#7950f2">A small thank-you</p>
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#5f3dc4">Two lavender wallpapers photographed by Kotkoa — one for your computer, one for your phone.</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${WALLPAPERS.map(wallpaperRow).join('')}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 28px;background:#5f3dc4;font-family:${FONT}">
            <p style="margin:0 0 10px;font-size:20px;line-height:1.4;font-weight:600;color:#f3f0ff">Thank you for being part of the field.</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#d0bfff">With gratitude,<br>Kotkoa &amp; Lavender Herbs</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 28px;background:#4c2fa8;font-family:${FONT}">
            <p style="margin:0;font-size:12px;line-height:1.6;color:#d0bfff">You receive this email because you supported <a href="${SITE_URL}" style="color:#f3f0ff">lavenderherbs.org</a> through Stripe. Your payment receipt comes separately. Questions? Just reply or write to <a href="mailto:${SUPPORT_EMAIL}" style="color:#f3f0ff">${SUPPORT_EMAIL}</a>.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`

  const text = [
    greeting,
    '',
    'We are truly grateful for your contribution. Support like yours helps us prepare the land and grow our lavender field — from the soil up to the young plants.',
    '',
    `Your payment added ${bushes} to the public field counter: ${SITE_URL}/donate`,
    '',
    'A small thank-you: two lavender wallpapers photographed by Kotkoa.',
    '',
    ...WALLPAPERS.flatMap((wallpaper) => [
      `${wallpaper.title} (${wallpaper.device.toLowerCase()})`,
      `JPG · ${wallpaper.width} × ${wallpaper.height} px · ${wallpaper.size}`,
      `${wallpaper.file}: ${wallpaperUrl(wallpaper.file)}`,
      '',
    ]),
    'Thank you for being part of the field.',
    'With gratitude,',
    'Kotkoa & Lavender Herbs',
    '',
    `Questions? Reply to this email or write to ${SUPPORT_EMAIL}.`,
  ].join('\n')

  return { subject, html, text }
}
