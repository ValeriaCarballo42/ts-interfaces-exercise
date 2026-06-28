// TODO: Creá una interface WeatherCardProps y tipá las props de este componente.
// Las props que recibe son:
//   - temperature: number
//   - windSpeed: number
//   - time: string

export function WeatherCard(props) {
  return (
    <div className="card">
      <h2>Condiciones actuales</h2>
      <p>
        <strong>Temperatura:</strong> {props.temperature}&deg;C
      </p>
      <p>
        <strong>Viento:</strong> {props.windSpeed} km/h
      </p>
      <p>
        <strong>Actualizado:</strong> {props.time}
      </p>
    </div>
  );
}
