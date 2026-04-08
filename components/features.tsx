import {
  LayoutGrid,
  Search,
  Download,
  UserCheck,
  Ban,
  Heart,
  Users,
  Package,
} from "lucide-react"

const features = [
  {
    icon: LayoutGrid,
    tag: "PINTEREST",
    title: "Home, search, and boards",
    description: "Browse your core Pinterest flows in one focused desktop window.",
  },
  {
    icon: Package,
    tag: "STACK",
    title: "Desktop app stack",
    description: "Flask, pywebview, Playwright, and PyInstaller packaged into one exe.",
  },
  {
    icon: Search,
    tag: "SEARCH",
    title: "API + fallback search",
    description: "Account-based search when logged in, anonymous fallback when not.",
  },
  {
    icon: Users,
    tag: "X / ARTISTS",
    title: "Favorite artists in one place",
    description: "Add @handles and scroll one combined media feed. Filter by artist, refresh anytime.",
  },
  {
    icon: Download,
    tag: "DOWNLOAD",
    title: "Quality-aware downloads",
    description: "Save to a folder with minimum or exact resolution rules.",
  },
  {
    icon: UserCheck,
    tag: "SESSION",
    title: "Browser session sync",
    description: "Copy your browser login into the app. No password stored.",
  },
  {
    icon: Heart,
    tag: "LIBRARY",
    title: "Likes and collections",
    description: "Keep local favorites and custom groups stored on your machine.",
  },
  {
    icon: Ban,
    tag: "FILTERS",
    title: "Promoted and AI filters",
    description: "Optionally reduce promoted and AI-labeled content for a cleaner feed.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">What&apos;s in the app</h2>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border hover:bg-secondary/50 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md">
                  <feature.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-muted-foreground tracking-wider">{feature.tag}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
