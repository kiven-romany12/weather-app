export function getWeatherCodeDescription(weatherCode?: number) {
    switch (weatherCode) {
        case 0:
            return "Clear sky";
        case 1:
            return "Mainly clear";
        case 2:
            return "Few clouds";
        case 3:
            return "Overcast";
        case 4:
            return "Scattered clouds";
        case 5:
            return "Broken clouds";
        case 6:
            return "Overcast";
        case 7:
            return "Overcast";
        case 8:
            return "Overcast";
        case 9:
            return "Tornado";
        case 10:
            return "Tropical storm";
        case 11:
            return "Hurricane";
        case 12:
            return "Tropical storm";
        case 13:
            return "Hurricane";
        case 14:
            return "Tropical storm";
        case 15:
            return "Hurricane";
        case 16:
            return "Tropical storm";
        case 17:
            return "Hurricane";
        case 18:
            return "Hurricane";
        case 19:
            return "Snowstorm";
        case 20:
            return "Snowstorm";
        case 21:
            return "Snowstorm";
        case 22:
            return "Snowstorm";
        case 23:
            return "Snowstorm";
        case 24:
            return "Snowstorm";
        case 25:
            return "Snowstorm";
        case 26:
            return "Snowstorm";
        case 27:
            return "Snowstorm";
        case 45:
        case 48:
            return "Fog";
        case 51:
        case 53:
        case 55:
            return "Drizzle";
        case 61:
        case 63:
        case 65:
            return "Rain";
        case 71:
        case 73:
        case 75:
            return "Snow";
        case 80:
        case 81:
        case 82:
            return "Rain showers";
        case 95:
        case 96:
        case 99:
            return "Thunderstorm";
        default:
            return "Loading weather";
        }
    }
