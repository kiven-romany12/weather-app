import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { CityType } from "../types/CityType"

type WeatherContextValue = {
  cityList: CityType[]
  addCity: (city: CityType) => void
  removeCity: (cityId: number) => void
}

const WeatherContext = createContext<WeatherContextValue | null>(null)

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [cityList, setCityList] = useState<CityType[]>([])

  const addCity = (city: CityType) => {
    setCityList(prev => {
      if (prev.some(existing => existing.id === city.id)) {
        return prev
      }
      return [...prev, city]
    })
  }

  const removeCity = (cityId: number) => {
    setCityList(prev => prev.filter(city => city.id !== cityId))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCityList(prev => prev.map(city => ({ ...city, updatedAt: new Date() })))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <WeatherContext.Provider value={{ cityList, addCity, removeCity }}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider")
  }
  return context
}
