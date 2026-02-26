import { IconMicrophone, IconServer, IconBrain, IconVolume } from "@tabler/icons-react"

const steps = [
  {
    icon: IconMicrophone,
    label: "Capture",
    title: "Voice Input",
    description: "Browser microphone or Twilio phone call captures audio in the right format.",
  },
  {
    icon: IconServer,
    label: "Bridge",
    title: "OpenConverse Server",
    description: "Go server transcodes, buffers, and streams audio with session lifecycle management.",
  },
  {
    icon: IconBrain,
    label: "Process",
    title: "Live AI API",
    description: "Connected AI service processes audio in real-time with voice activity detection.",
  },
  {
    icon: IconVolume,
    label: "Respond",
    title: "Audio Response",
    description: "AI response streams back through the server to the browser or phone caller.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28">
      <div className="absolute inset-0 bg-[var(--oc-surface-1)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            How it <span className="text-[var(--oc-accent)]">works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A simple four-step pipeline from voice input to AI response.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[15%] right-[15%] h-px bg-border" />

          {steps.map((step, i) => (
            <div key={step.label} className="relative text-center">
              <div className="relative mx-auto mb-5">
                <div className="size-12 rounded-xl mx-auto flex items-center justify-center border border-border bg-card">
                  <step.icon size={24} className="text-[var(--oc-accent)]" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 size-5 rounded-full text-[10px] font-bold flex items-center justify-center bg-[var(--oc-accent)] text-white">
                  {i + 1}
                </span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--oc-accent)] mb-1.5 block">
                {step.label}
              </span>
              <h3 className="font-display font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Pipeline diagram */}
        <div className="mt-16 p-5 rounded-xl border border-border bg-card max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <span className="px-3 py-1.5 rounded-full bg-[var(--oc-accent-light)] text-[var(--oc-accent)] font-mono text-xs border border-[var(--oc-accent)]/10">
              Audio In
            </span>
            <span className="text-muted-foreground hidden sm:block">&rarr;</span>
            <span className="text-muted-foreground sm:hidden">&darr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[var(--oc-accent-light)] text-[var(--oc-accent)] font-mono text-xs border border-[var(--oc-accent)]/10">
              Transcode
            </span>
            <span className="text-muted-foreground hidden sm:block">&rarr;</span>
            <span className="text-muted-foreground sm:hidden">&darr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[var(--oc-accent-light)] text-[var(--oc-accent)] font-mono text-xs border border-[var(--oc-accent)]/10">
              AI API
            </span>
            <span className="text-muted-foreground hidden sm:block">&rarr;</span>
            <span className="text-muted-foreground sm:hidden">&darr;</span>
            <span className="px-3 py-1.5 rounded-full bg-[var(--oc-accent-light)] text-[var(--oc-accent)] font-mono text-xs border border-[var(--oc-accent)]/10">
              Audio Out
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
