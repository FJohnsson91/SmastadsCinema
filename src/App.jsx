import { Routes, Route } from 'react-router-dom'
import NavbarSite from './components/NavBar'
import Movies from './pages/Movies'
import Screenings from './pages/Screenings'
import StartPage from './pages/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return <>
    <header>
      <NavbarSite />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/screenings' element={<Screenings />} />
      </Routes>
    </main>
  </>
}