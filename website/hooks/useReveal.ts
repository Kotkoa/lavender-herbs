import { useEffect, useRef } from 'react'

// Adds `visible` to every `.reveal` descendant once it scrolls into view,
// delayed by its `data-delay` attribute (ms).
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (!isIntersecting) continue
          const el = target as HTMLElement
          el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`
          el.classList.add('visible')
        }
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
