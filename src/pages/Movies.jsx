import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import DisplayMovie from '../components/DisplayMovie'

export default function Movies() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async () => {
      setMovies(await (await (fetch('/api/movies'))).json())
    })()
  }, [])

  return <div className="movies">
    {movies.map(({ id, title, description }) => <DisplayMovie
      key={id}
      title={title}
      description={description}
    />)}
  </div>
}