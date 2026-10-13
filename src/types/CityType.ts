
export type CityTypeApiResponse = {
    results: CityType[]
}

export type CityType = {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    elevation: number,
    feature_code: string,
    country_code: string,
    admin1_id: string,
    timezone: string,
    population: number,
    country_id: number,
    country: string,
    admin1: string,
    updatedAt: Date
}