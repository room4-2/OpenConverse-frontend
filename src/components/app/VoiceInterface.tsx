import { useState, useRef, useCallback, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  IconMicrophone,
  IconMicrophoneOff,
  IconPlugConnected,
  IconPlugConnectedX,
  IconSettings,
  IconX,
  IconWaveSine,
} from "@tabler/icons-react"

type ConnectionStatus = "disconnected" | "connecting" | "connected"

function LiveWaveform({ active }: { active: boolean }) {
  const bars = Array.from({ length: 48 }, (_, i) => i)
  return (
    <div className="flex items-center justify-center gap-[2px] h-40">
      {bars.map((i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[var(--oc-accent)] transition-all duration-300"
          style={{
            height: active ? `${Math.sin(Date.now() / 500 + i * 0.3) * 40 + 50}%` : "4px",
            opacity: active ? 0.4 + Math.sin(i * 0.3) * 0.4 : 0.15,
            animation: active ? `waveform-bar ${0.8 + (i % 6) * 0.15}s ease-in-out ${i * 0.03}s infinite` : "none",
          }}
        />
      ))}
    </div>
  )
}

export function VoiceInterface() {
  const [status, setStatus] = useState<ConnectionStatus>("disconnected")
  const [isListening, setIsListening] = useState(false)
  const [serverUrl, setServerUrl] = useState("ws://localhost:8080/ws")
  const [showSettings, setShowSettings] = useState(false)
  const [transcript, setTranscript] = useState<Array<{ role: "user" | "ai"; text: string }>>([])
  const wsRef = useRef<WebSocket | null>(null)
  const transcriptEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [transcript])

  const connect = useCallback(() => {
    if (wsRef.current) wsRef.current.close()
    setStatus("connecting")

    try {
      const ws = new WebSocket(serverUrl)
      ws.onopen = () => {
        setStatus("connected")
        setTranscript((prev) => [...prev, { role: "ai", text: "Connected. Tap the microphone to start talking." }])
      }
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          if (data.type === "text" && data.text) {
            setTranscript((prev) => [...prev, { role: "ai", text: data.text }])
          }
        } catch {
          // binary audio data
        }
      }
      ws.onerror = () => {
        setStatus("disconnected")
        setTranscript((prev) => [...prev, { role: "ai", text: "Connection error. Check the server URL and try again." }])
      }
      ws.onclose = () => {
        setStatus("disconnected")
        setIsListening(false)
      }
      wsRef.current = ws
    } catch {
      setStatus("disconnected")
      setTranscript((prev) => [...prev, { role: "ai", text: "Failed to connect. Is the server running?" }])
    }
  }, [serverUrl])

  const disconnect = useCallback(() => {
    wsRef.current?.close()
    wsRef.current = null
    setStatus("disconnected")
    setIsListening(false)
  }, [])

  const toggleListening = useCallback(() => {
    if (status !== "connected") return
    setIsListening((prev) => !prev)
  }, [status])

  const statusConfig = {
    disconnected: { color: "oklch(0.5 0.02 270)", label: "Disconnected" },
    connecting: { color: "oklch(0.7 0.15 80)", label: "Connecting..." },
    connected: { color: "#10b981", label: "Connected" },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <IconWaveSine size={18} className="text-[var(--oc-accent)]" />
          <span className="font-display font-bold text-foreground">Voice Interface</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs">
            <span
              className="size-2 rounded-full"
              style={{ background: statusConfig[status].color }}
            />
            <span className="text-muted-foreground">{statusConfig[status].label}</span>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {showSettings ? <IconX size={18} /> : <IconSettings size={18} />}
          </button>
        </div>
      </div>

      {/* Settings */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-border overflow-hidden"
          >
            <div className="p-6 max-w-xl mx-auto">
              <label className="block text-sm font-medium text-foreground mb-2">Server URL</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={serverUrl}
                  onChange={(e) => setServerUrl(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--oc-accent)] focus:ring-2 focus:ring-[var(--oc-accent)]/10 transition-all font-mono"
                  placeholder="ws://localhost:8080/ws"
                />
                {status === "disconnected" ? (
                  <button
                    onClick={connect}
                    className="px-5 py-2.5 rounded-lg bg-[var(--oc-accent)] text-sm font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <IconPlugConnected size={16} />
                    Connect
                  </button>
                ) : (
                  <button
                    onClick={disconnect}
                    className="px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <IconPlugConnectedX size={16} />
                    Disconnect
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl mb-10">
          <LiveWaveform active={isListening && status === "connected"} />
        </div>

        {/* Mic button */}
        <div className="relative mb-10">
          <button
            onClick={toggleListening}
            disabled={status !== "connected"}
            className={`size-20 rounded-full flex items-center justify-center transition-all duration-200 ${
              status !== "connected"
                ? "bg-muted border border-border text-muted-foreground cursor-not-allowed"
                : isListening
                  ? "bg-[var(--oc-accent)] text-white shadow-lg"
                  : "border-2 border-[var(--oc-accent)]/30 text-[var(--oc-accent)] hover:bg-[var(--oc-accent-light)]"
            }`}
          >
            {isListening ? <IconMicrophone size={32} /> : <IconMicrophoneOff size={32} />}
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          {status !== "connected"
            ? "Connect to a server to get started"
            : isListening
              ? "Listening... speak now"
              : "Tap the microphone to start"}
        </p>

        {/* Transcript */}
        {transcript.length > 0 && (
          <div className="w-full max-w-xl space-y-3 max-h-64 overflow-y-auto px-2">
            {transcript.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-[var(--oc-accent)] text-white rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>
        )}
      </div>
    </div>
  )
}
