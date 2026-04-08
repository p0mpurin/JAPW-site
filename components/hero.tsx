"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
        Just A Pinterest Wrapper{" "}
          <span className="text-muted-foreground">and More.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Pinterest in one focused window, and your favorite X artists rolled into a single Artists feed so you do not hop between profiles.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="gap-2 text-base px-6 h-12" asChild>
            <a href="https://github.com/p0mpurin/JAPW/releases/download/v1.0.0-beta/JAPW.exe">
              <Download className="w-4 h-4" />
              Download for Windows
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 text-base px-6 h-12" asChild>
            <a href="https://github.com/p0mpurin/JAPW" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" />
              Source on GitHub
            </a>
          </Button>
        </div>
        
        {/* Note */}
        <p className="text-sm text-muted-foreground/70 font-mono">
          not affiliated with Pinterest or X, use it within their terms
        </p>

        {/* App screenshot */}
        <div className="mt-12 rounded-lg border border-border bg-card p-2">
          <img
            src="/images/app-screenshot.png"
            alt="JAPW desktop app screenshot"
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}
