import { useEffect } from 'react'
import { useStates } from '../utilities/states'

import DisplayMovie from '../components/DisplayMovie'

export default function Movies() {

  const s = useStates('main', {
    movies: []
  })

  const handleMovies = async () => {
    const responseMovies = await fetch('api/movies')

    if (responseMovies.ok) {
      const fetchedMovies = await responseMovies.json()
      s.movies = fetchedMovies
    } else {
      const errorMessage = await responseMovies.text()
      console.error(errorMessage)
    }
  }

  useEffect(() => {
    handleMovies()
  }, [])

  return <div className="Movie">
    {s.movies.map(({ title, description }) => <DisplayMovie
      title={title}
      description={description}
    />)}
  </div>
}