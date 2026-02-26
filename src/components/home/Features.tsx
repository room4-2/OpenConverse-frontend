import {
  IconWorldWww,
  IconPhone,
  IconBolt,
  IconSettings,
  IconServer,
  IconShieldLock,
} from "@tabler/icons-react"

const features = [
  {
    icon: IconWorldWww,
    title: "WebSocket Streaming",
    description: "Connect directly from the browser with real-time bidirectional audio via WebSocket.",
  },
  {
    icon: IconPhone,
    title: "Twilio Phone Calls",
    description: "Accept phone calls through Twilio integration with automatic format conversion.",
  },
  {
    icon: IconBolt,
    title: "Real-Time Audio",
    description: "Sub-second latency with intelligent buffering and voice activity detection.",
  },
  {
    icon: IconSettings,
    title: "Multi-API Support",
    description: "Integrate with Google Gemini Live, and other real-time AI APIs. Easily extensible architecture.",
  },
  {
    icon: IconServer,
    title: "Flexible Deployment",
    description: "Run websocket-only, Twilio-only, or hybrid mode. Docker-ready with session pooling.",
  },
  {
    icon: IconShieldLock,
    title: "Open Source",
    description: "MIT Licensed. Full control over your data and infrastructure. No vendor lock-in.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Everything you need for <span className="text-[var(--oc-accent)]">voice AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A complete server-side solution bridging clients to live AI APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-[var(--oc-accent)]/20 hover:bg-[var(--oc-accent-light)] transition-all duration-200"
            >
              <div className="size-10 rounded-lg bg-[var(--oc-accent-light)] flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-[var(--oc-accent)]" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
