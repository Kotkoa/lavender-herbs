import Button from '@/components/ui/Button'
import { SUPPORT_URL } from '@/lib/support'

export default function DonationControls() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-muted-light max-w-md leading-relaxed">
        Tips go through Ko-fi. Every <span className="font-bold text-(--tone-900)">&euro;1</span> adds
        one bush to the field counter.
      </p>

      {SUPPORT_URL && (
        <Button variant="solid" href={SUPPORT_URL} className="text-lg px-10 py-4">
          Tip on Ko-fi
        </Button>
      )}
    </div>
  )
}
