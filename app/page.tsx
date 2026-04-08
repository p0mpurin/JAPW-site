import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Why } from "@/components/why"
import { Steps } from "@/components/steps"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Why />
        <Steps />
      </main>
      <Footer />
    </div>
  )
}
