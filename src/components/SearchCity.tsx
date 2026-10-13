import { useRef, useState } from "react"
import { MapPin, Search } from "lucide-react"
import type { CityType, CityTypeApiResponse } from "../types/CityType"
import { useWeather } from "../context/WeatherContext"

const SearchCity = () => {
  const { addCity } = useWeather()
  const [results, setResults] = useState<CityType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    abortRef.current?.abort()
    if (newQuery.length < 3) {
      setResults([])
      return
    }
    const controller = new AbortController()
    abortRef.current = controller
    const fetchData = async () => {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${newQuery}`,
        { signal: controller.signal }
      )
      const data: CityTypeApiResponse = await response.json()
      setResults(data.results ?? [])
    }
    fetchData().catch(error => {
      if (error instanceof DOMException && error.name === "AbortError") {
        return
      }
    })
  }

  const handleAddCityClick = (city: CityType) => {
    addCity({ ...city, updatedAt: new Date() })
    setResults([])
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute top-3.5 left-3 text-slate-500" size={18} />
      <input
        ref={inputRef}
        onChange={handleSearch}
        type="text"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pr-3 pl-10 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
        placeholder="Search city"
      />
      {results.length > 0 && (
        <div className="absolute z-10 mt-2 flex w-full flex-col gap-1 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl shadow-black/40">
          {results.map(result => (
            <button
              type="button"
              onClick={() => handleAddCityClick(result)}
              key={result.id}
              className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left text-slate-200 hover:bg-slate-800"
            >
              <MapPin size={16} className="text-sky-400" />
              {result.name}, {result.country}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchCity
