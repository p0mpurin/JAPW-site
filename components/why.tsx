export function Why() {
  const reasons = [
    "Pinterest without the clutter. Just the parts I actually use.",
    "One-click downloads straight to a folder.",
    "All the X art accounts I follow in one feed, downloadable the same way.",
  ]

  return (
    <section id="why" className="px-6 py-24 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Why</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Why I built this</h2>
        </div>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          I wanted something that looked good and did exactly what I needed.
        </p>

        <ul className="space-y-4">
          {reasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
              <span className="text-muted-foreground">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
