import { useEffect, useState } from "react"
import { Wind, X } from "lucide-react"
import type { CityType } from "../types/CityType"
import type { WeatherDataAPIResponse } from "../types/WeatherData"
import { getWeatherCodeDescription } from "../utils/getWeatherCodeDescriptions"
import { getWeatherCodeIcon } from "../utils/getWeatherCodeIcon"
import { useWeather } from "../context/WeatherContext"

type Props = {
  city: CityType
}

function WeatherCard({ city }: Props) {
  const { removeCity } = useWeather()
  const [weather, setWeather] = useState<WeatherDataAPIResponse | null>(null)
  const WeatherIcon = getWeatherCodeIcon(weather?.current_weather.weathercode)

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`
    )
    const data: WeatherDataAPIResponse = await response.json()
    setWeather(data)
  }

  useEffect(() => {
    fetchWeather()
  }, [city])

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-white">
          {city.name}, {city.country}
        </h2>
        <button
          type="button"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-red-500/20 hover:text-red-400"
          onClick={() => removeCity(city.id)}
          aria-label={`Remove ${city.name}`}
        >
          <X size={16} />
        </button>
      </div>
      <p className="text-4xl font-bold text-white">
        {weather?.current_weather.temperature} °C
      </p>
      <p className="flex items-center gap-2 text-sm text-slate-300">
        <WeatherIcon size={20} className="text-sky-400" />
        {getWeatherCodeDescription(weather?.current_weather.weathercode)}
      </p>
      <p className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 p-2 text-sm text-slate-300">
        <Wind size={16} className="text-slate-400" />
        {weather?.current_weather.windspeed} km/h
      </p>
      <p className="text-xs text-slate-500">Updated at {city.updatedAt.toLocaleString()}</p>
    </div>
  )
}

export default WeatherCard
