import Button from '@/components/ui/Button'
import { getCheckoutUrl } from '@/lib/stripe'

export default function DonationControls() {
  const checkoutUrl = getCheckoutUrl()

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-muted-light max-w-md leading-relaxed">
        Payments are processed securely by Stripe. Every <span className="font-bold text-(--tone-900)">&euro;1</span> adds
        one bush to the public field counter.
      </p>

      {checkoutUrl && (
        <Button variant="solid" href={checkoutUrl} className="text-lg px-10 py-4">
          Support with Stripe
        </Button>
      )}
    </div>
  )
}
