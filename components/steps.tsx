const steps = [
  {
    number: "01",
    title: "Log into Pinterest in your browser",
    description: "Chrome, Edge, Firefox, Brave, and most others work.",
  },
  {
    number: "02",
    title: "Open Settings and sync",
    description: "JAPW copies your cookies into a session file, so your app login matches your browser.",
  },
  {
    number: "03",
    title: "Browse, filter, and download",
    description: "Sync again anytime your session expires.",
  },
]

export function Steps() {
  return (
    <section id="setup" className="px-6 py-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Setup</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Getting started</h2>
        </div>
        
        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex gap-6 py-6 border-b border-border last:border-b-0"
            >
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
