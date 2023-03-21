export default function DisplayScreenings(props) {

  let { screeningTime, movie, auditorium } = props

  return <div className="screening">
    <h2>{new Intl.DateTimeFormat('sv-SE', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(screeningTime))}</h2>
    <h2>{movie}</h2>
    <h2>{auditorium}</h2>
  </div>
}