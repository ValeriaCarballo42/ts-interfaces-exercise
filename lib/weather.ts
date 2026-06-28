import { WeatherResponse } from "@/types/weather";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

// TODO: Esta función usa el tipo WeatherResponse, que está incompleto.
// Al completar las interfaces en /types/weather.ts, los errores de
// tipado que veas acá deberían resolverse automáticamente.

export async function getWeather(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    current: "temperature_2m,wind_speed_10m",
    hourly: "temperature_2m,relative_humidity_2m",
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!res.ok) {
    throw new Error(`Error al consultar Open-Meteo: ${res.status}`);
  }

  const data: WeatherResponse = await res.json();
  return data;
}
