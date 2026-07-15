import { getWeather } from "@/lib/weather";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherResponse } from "@/types/weather";

const CORDOBA_LAT = -31.42;
const CORDOBA_LON = -64.18;

export default async function HomePage() {
  const data = await getWeather(CORDOBA_LAT, CORDOBA_LON);

  return (
    <main>
      <h1>Clima en Córdoba, Argentina</h1>

      {/* Estos accesos deberían fallar hasta que completes las interfaces */}
      <p>Latitud: {data.latitude}</p>
      <p>Altitud: {data.elevation} m</p>
      <p>Zona horaria: {data.timezone}</p>

      <WeatherCard
        temperature={data.current.temperature}
        windSpeed={data.current.wind_speed}
        time={data.current.time}
      />

      <section>
        <h2>Pronóstico por hora</h2>
        <p>Humedad relativa promedio: {data.hourly.relative_humidity_2m[0]}</p>
      </section>

      {/* TODO: este componente recibe props sin tipar */}
      <DebugInfo data={data} />
    </main>
  );
}

export interface DebugInfoProps {
  data: WeatherResponse;
}

// TODO: declará una interface para las props de este componente
function DebugInfo(props: DebugInfoProps) {
  return (
    <details>
      <summary>Respuesta cruda (debug)</summary>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </details>
  );
}
