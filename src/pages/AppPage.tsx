import { Navbar } from "@/components/layout/Navbar"
import { VoiceInterface } from "@/components/app/VoiceInterface"

export function AppPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pt-[72px]">
        <VoiceInterface />
      </div>
    </div>
  )
}
