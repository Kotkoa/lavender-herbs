
export default function DonationControls() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-muted-light max-w-md leading-relaxed">
        Tips go through Ko-fi. Every <span className="font-bold text-(--tone-900)">&euro;1</span> adds
        one bush to the field counter.
      </p>

      <iframe
        id="kofiframe"
        src="https://ko-fi.com/kotkoa/?hidefeed=true&widget=true&embed=true"
        width="100%"
        height="712"
        style={{ border: 0, padding: 4, background: '#f9f9f9', boxSizing: 'border-box' }}
        className="mx-auto block max-w-2xl"
        loading="lazy"
        title="Support Kotkoa on Ko-fi"
      />
    </div>
  )
}
