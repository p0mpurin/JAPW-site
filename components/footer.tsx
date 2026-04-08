export function Footer() {
  const techStack = ["Playwright", "Flask", "pywebview", "PyInstaller"]
  
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <span className="font-mono text-sm text-muted-foreground/60 tracking-wider">japw</span>
          
          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-mono text-muted-foreground border border-border rounded-sm hover:border-muted-foreground/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground mb-2">
            Not affiliated with Pinterest or X. Respect platform terms and local laws.
          </p>
          <p className="text-xs font-mono text-muted-foreground/60">
            &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
