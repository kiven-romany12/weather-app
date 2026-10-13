import type { LucideIcon } from "lucide-react"
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  Tornado,
} from "lucide-react"

export function getWeatherCodeIcon(weatherCode?: number): LucideIcon {
  switch (weatherCode) {
    case 0:
    case 1:
      return Sun
    case 2:
      return CloudSun
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return Cloud
    case 9:
      return Tornado
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      return CloudRain
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
      return CloudSnow
    case 45:
    case 48:
      return CloudFog
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return CloudDrizzle
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return CloudRain
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return CloudSnow
    case 95:
    case 96:
    case 99:
      return CloudLightning
    default:
      return Cloud
  }
}
