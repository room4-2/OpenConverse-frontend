import { Link } from "react-router-dom"
import { IconBrandGithub, IconHeart } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="OpenConverse" className="size-7 rounded-md" />
              <span className="font-display font-bold text-foreground">OpenConverse</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Open-source voice assistant server. Connect browsers and phones to live AI APIs.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Project</h4>
            <ul className="space-y-2.5">
              <li><a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="/#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quick Start</a></li>
              <li><Link to="/app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Voice App</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Community</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://github.com/room4-2/OpenConverse" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                  <IconBrandGithub size={14} />
                  GitHub
                </a>
              </li>
              <li><a href="https://github.com/room4-2/OpenConverse/issues" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Issues</a></li>
              <li><a href="https://github.com/room4-2/OpenConverse/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">MIT License</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} OpenConverse. Open source under MIT License.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <IconHeart size={12} className="text-[var(--oc-accent)]" /> by the community
          </p>
        </div>
      </div>
    </footer>
  )
}
