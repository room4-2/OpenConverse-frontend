import { Link } from "react-router-dom"
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react"

export function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-border bg-[var(--oc-accent-light)] px-8 py-20 sm:px-16 text-center">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Ready to build with <span className="text-[var(--oc-accent)]">voice AI?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
            Start building real-time voice applications in minutes.
            Open source, free forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="group px-8 py-3.5 text-sm font-semibold rounded-full bg-[var(--oc-accent)] text-white hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Try the Voice App
              <IconArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://github.com/room4-2/OpenConverse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-semibold rounded-full border border-border text-foreground hover:bg-muted transition-colors flex items-center gap-2"
            >
              <IconBrandGithub size={18} />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
