// ============================================================
// TIPOS PARA LA API DE OPEN-METEO
// ============================================================
// Endpoint de referencia (probalo en el navegador):
// https://api.open-meteo.com/v1/forecast?latitude=-31.42&longitude=-64.18&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m


export interface WeatherResponse extends GeoLocation {
    current: CurrentWeather;
    hourly: HourlyWeather;
    timezone: string;
    timezone_abbreviation: string;
}
/* ---------------------------------- */

export interface GeoLocation {
  latitude: number;
  longitude: number;
  elevation: number;
}

/* ---------------------------------- */

export interface CurrentWeather {
  temperature_2m: number;
  wind_speed_10m: number;
  time: string;
  interval: number;

}

/* ---------------------------------- */

// TODO: esta interface está mal tipada a propósito.
// La respuesta real tiene:
//   - "time": string[]
//   - "temperature_2m": number[]
//   - "relative_humidity_2m": number[]
// Corregí los tipos de cada campo y agregá los que faltan.
export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number [];
}
