import { CloudSun, Radio } from "lucide-react"

function Header() {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-4 shadow-lg shadow-black/20">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
          <CloudSun size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Weather App Dashboard</h1>
          <h3 className="text-sm text-slate-400">
            Real-time weather updates every 5 seconds for your favorite cities
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
        <Radio size={16} className="animate-pulse" />
        Live
      </div>
    </header>
  )
}

export default Header
