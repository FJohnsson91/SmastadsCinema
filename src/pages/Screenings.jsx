import { useEffect, useState } from "react"
import DisplayScreenings from "../components/DisplayScreenings"
import Container from "react-bootstrap/Container"

export default function Screenings() {
  const [screenings, setScreenings] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async () => {
      const screeningsResponse = await fetch('/api/screenings')
      const screeningsData = await screeningsResponse.json()
      setScreenings(screeningsData)

      const moviesResponse = await fetch('/api/movies')
      const moviesData = await moviesResponse.json()
      setMovies(moviesData)
    })()
  }, [])

  const moviesByDate = {}
  screenings.forEach((screening) => {
    const movie = movies.find((m) => m.id === screening.movieId)
    if (movie) {
      const screeningDate = new Date(screening.time).toLocaleDateString('en-EN')
      if (!moviesByDate[screeningDate]) {
        moviesByDate[screeningDate] = []
      }
      moviesByDate[screeningDate].push({
        id: movie.id,
        title: movie.title,
        time: screening.time
      })
    }
  })

  return (
    <Container>
      {Object.keys(moviesByDate).map((date) => (
        <DisplayScreenings
          key={date}
          date={date}
          movies={moviesByDate[date]}
        />
      ))}
    </Container>
  )
}
