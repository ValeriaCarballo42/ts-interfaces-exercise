// ============================================================
// TIPOS PARA LA API DE OPEN-METEO
// ============================================================
// Endpoint de referencia (probalo en el navegador):
// https://api.open-meteo.com/v1/forecast?latitude=-31.42&longitude=-64.18&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m

// TODO: esta interface debería extender de GeoLocation
// TODO: completar el campo "timezone" (es string)
// TODO: completar el campo "timezone_abbreviation" (es string, viene en la respuesta)
export interface WeatherResponse {
  current: CurrentWeather;
  hourly: HourlyWeather;
}

/* ---------------------------------- */

export interface GeoLocation {
  latitude: number;
  longitude: number;
  // TODO: agregar el campo "elevation" (number)
}

/* ---------------------------------- */

export interface CurrentWeather {
  temperature: number;
  wind_speed: number;
  time: string;
  // TODO: completar este campo según la respuesta real de la API
  // Tip: inspeccioná la respuesta JSON de Open-Meteo, el campo se
  // llama "interval" y es de tipo number (segundos entre mediciones).
  // interval: ???;
}

/* ---------------------------------- */

// TODO: esta interface está mal tipada a propósito.
// La respuesta real tiene:
//   - "time": string[]
//   - "temperature_2m": number[]
//   - "relative_humidity_2m": number[]
// Corregí los tipos de cada campo y agregá los que faltan.
export interface HourlyWeather {
  time: any[];
  temperature_2m: any[];
}
