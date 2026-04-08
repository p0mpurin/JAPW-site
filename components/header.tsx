"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <header 
      className={`sticky top-0 z-50 px-6 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-medium tracking-wider hover:text-muted-foreground transition-colors">
          japw
        </a>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Why
          </a>
          <a href="#setup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Setup
          </a>
        </div>
        
        {/* CTA */}
        <Button size="sm" className="gap-2" asChild>
          <a href="https://github.com/p0mpurin/JAPW/releases/download/v1.0.0-beta/JAPW.exe">
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </Button>
      </nav>
    </header>
  )
}
