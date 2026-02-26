import { Link } from "react-router-dom"
import { IconBrandGithub, IconArrowRight } from "@tabler/icons-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0 0 0 / 6%) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6 text-foreground">
          Talk to AI,
          <br />
          <span className="text-[var(--oc-accent)]">Anywhere.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Open-source voice assistant server that connects your browser and phone calls
          to live AI APIs. Real-time, bidirectional, extensible.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            to="/app"
            className="group px-8 py-3.5 text-sm font-semibold rounded-full bg-[var(--oc-accent)] text-white hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Try it Live
            <IconArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="https://github.com/room4-2/OpenConverse"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-sm font-semibold rounded-full border border-border text-foreground hover:bg-muted transition-colors flex items-center gap-2"
          >
            <IconBrandGithub size={18} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
