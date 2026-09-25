import Button from '@/components/ui/Button'
import { CHECKOUT_URL } from '@/lib/stripe'

export default function DonationControls() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-muted-light max-w-md leading-relaxed">
        Payments are processed securely by Stripe. Every <span className="font-bold text-(--tone-900)">&euro;1</span> adds
        one bush to the public field counter.
      </p>

      {CHECKOUT_URL && (
        <Button variant="solid" href={CHECKOUT_URL} className="text-lg px-10 py-4">
          Support with Stripe
        </Button>
      )}
    </div>
  )
}
