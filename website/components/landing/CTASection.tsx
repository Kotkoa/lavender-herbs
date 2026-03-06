'use client'

export default function CTASection() {
  return (
    <section id="contact" className="bg-tone-900 py-24 relative overflow-hidden">
      {[900, 650, 400].map((size, i) => (
        <div
          key={size}
          className="absolute top-1/2 left-1/2 rounded-full border border-[rgba(177,151,252,0.08)] animate-[ringPulse_6s_ease-in-out_infinite] pointer-events-none"
          style={{
            width: size,
            height: size,
            marginTop: -size / 2,
            marginLeft: -size / 2,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      <div className="container-mx relative z-1">
        <div className="max-w-3xl">
          <div>
            <p className="section-label text-tone-400">Stay connected</p>
            <h2 className="mb-4 font-bold text-cta text-tone-50 leading-[1.1]">
              Follow the season as it unfolds.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-tone-400">
              Follow along for blooming updates, harvest moments, and quiet life
              on the farm in Spain.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/lavender.herbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-tone-300 hover:text-tone-50 transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                @lavender.herbs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
