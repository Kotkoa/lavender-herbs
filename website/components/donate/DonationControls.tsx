'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { getCheckoutUrl } from '@/lib/stripe'

export default function DonationControls() {
  const [isProcessing, setIsProcessing] = useState(false)

  function handleCheckout() {
    if (isProcessing) return
    const url = getCheckoutUrl()
    if (!url) return
    setIsProcessing(true)
    window.location.href = url
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-muted-light max-w-md leading-relaxed">
        Each bush costs just <span className="font-bold text-[var(--tone-900)]">&euro;1</span>.
        Choose how many bushes to plant on the next page.
      </p>

      <Button
        variant="solid"
        onClick={handleCheckout}
        className="text-lg px-10 py-4"
      >
        {isProcessing ? 'Redirecting...' : 'Plant Now'}
      </Button>
    </div>
  )
}
