import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { HowItWorks } from "@/components/home/HowItWorks"
import { QuickStart } from "@/components/home/QuickStart"
import { CTA } from "@/components/home/CTA"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <QuickStart />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
