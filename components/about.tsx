export function About() {
  return (
    <section id="about" className="px-6 py-24 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Why I built this</h2>
        </div>
        
        {/* Content with side accent */}
        <div className="relative pl-6 border-l-2 border-foreground/20">
          <div className="absolute -left-[5px] top-0 w-2 h-2 bg-foreground rounded-full" />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              JAPW is a desktop wrapper for Pinterest with a focused UI. It keeps the parts that matter, feed, search, boards, related pins, likes, collections, and downloads, without living in a full browser tab.
            </p>
            <p>
              Login stays browser-based. You sync from Settings, JAPW imports cookies into a Playwright storage state, and API calls reuse that session. If it expires, sync again and continue.
            </p>
            <p>
              Optional promoted and AI-labeled filters keep the feed calmer. On X, the Artists tab groups posts from the handles you add into one scrollable feed instead of checking each profile separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
