import Header from "./components/Header"
import SearchCity from "./components/SearchCity"
import WeatherCard from "./components/WeatherCard"
import { WeatherProvider, useWeather } from "./context/WeatherContext"

function Dashboard() {
  const { cityList } = useWeather()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-8 py-6">
        <Header />
        <SearchCity />
        {cityList.length === 0 ? (
          <p className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-8 text-center text-slate-400">
            Search for a city to see live weather.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cityList.map(city => (
              <WeatherCard city={city} key={city.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  )
}

export default App
