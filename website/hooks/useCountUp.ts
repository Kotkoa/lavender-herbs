import { useEffect, useRef, useState } from 'react'

// Animates from the currently displayed value to `target` with an ease-out cubic curve.
export function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0)
  const valueRef = useRef(0)

  useEffect(() => {
    const from = valueRef.current
    let startTime: number | undefined
    let frame = requestAnimationFrame(function step(timestamp) {
      startTime ??= timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      valueRef.current = from + (target - from) * (1 - (1 - progress) ** 3)
      setValue(valueRef.current)
      if (progress < 1) frame = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}
