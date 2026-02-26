import { useState } from "react"
import { IconCopy, IconCheck, IconTerminal } from "@tabler/icons-react"

const codeSnippet = `# Clone the repository
git clone https://github.com/room4-2/OpenConverse.git
cd OpenConverse

# Configure your environment
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# Run the server
go run main.go

# Server is live at ws://localhost:8080/ws`

const envConfig = `# .env configuration
GEMINI_API_KEY=your_api_key_here
SERVER_TYPE=both        # websocket | twilio | both
PORT=8080
MAX_SESSIONS=100
SESSION_TIMEOUT=30      # minutes`

export function QuickStart() {
  const [copied, setCopied] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"setup" | "config">("setup")

  function handleCopy(text: string, key: string) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const displayCode = activeTab === "setup" ? codeSnippet : envConfig

  return (
    <section id="quickstart" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
              Up and running in <span className="text-[var(--oc-accent)]">minutes</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Clone the repo, add your API key, and run. OpenConverse handles
              WebSocket connections, audio transcoding, session management, and Twilio
              integration out of the box.
            </p>

            <div className="space-y-4">
              {[
                { step: "1", text: "Get an API key from your preferred AI provider" },
                { step: "2", text: "Clone the repo and configure .env" },
                { step: "3", text: "Run the server and connect" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="size-7 shrink-0 rounded-md bg-[var(--oc-accent)] flex items-center justify-center text-xs font-bold text-white">
                    {item.step}
                  </span>
                  <p className="text-muted-foreground pt-0.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="rounded-xl border border-border bg-[oklch(0.14_0.02_270)] overflow-hidden shadow-lg">
            {/* Tab bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("setup")}
                  className={`px-4 py-3 text-xs font-medium transition-colors border-b-2 ${
                    activeTab === "setup"
                      ? "border-[var(--oc-accent)] text-white"
                      : "border-transparent text-white/50 hover:text-white/70"
                  }`}
                >
                  <IconTerminal size={14} className="inline mr-1.5 -mt-0.5" />
                  Setup
                </button>
                <button
                  onClick={() => setActiveTab("config")}
                  className={`px-4 py-3 text-xs font-medium transition-colors border-b-2 ${
                    activeTab === "config"
                      ? "border-[var(--oc-accent)] text-white"
                      : "border-transparent text-white/50 hover:text-white/70"
                  }`}
                >
                  Config
                </button>
              </div>
              <button
                onClick={() => handleCopy(displayCode, activeTab)}
                className="p-1.5 rounded-md text-white/40 hover:text-white/70 transition-colors"
              >
                {copied === activeTab ? <IconCheck size={14} className="text-emerald-400" /> : <IconCopy size={14} />}
              </button>
            </div>

            {/* Code */}
            <div className="p-5 overflow-x-auto">
              <pre className="text-[13px] leading-relaxed font-mono">
                {displayCode.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 shrink-0 text-right pr-4 text-white/15 select-none">{i + 1}</span>
                    <span className={line.startsWith("#") ? "text-white/30" : "text-emerald-300/80"}>
                      {line}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
