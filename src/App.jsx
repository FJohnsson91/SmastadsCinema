import { useEffect } from 'react'
import { useStates } from './utilities/states'
import { Routes, Route } from 'react-router-dom'
import Screenings from './pages/Screenings'
import NavbarSite from './components/NavBar'
import StartPage from './pages/StartPage'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {

  const s = useStates('main', {
    screenings: []
  })

  useEffect(() => {
    (async () => {
      s.screenings = await (await fetch('/api/screenings')).json()
    })()
  }, [])

  return <>
    <header>
      <NavbarSite />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/screenings" element={<Screenings screenings={s.screenings} />}></Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  </>
}
