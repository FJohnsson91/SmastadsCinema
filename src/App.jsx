import { Routes, Route } from 'react-router-dom'

import Navbar from './components/NavBar'
import StartPage from './pages/StartPage'
import Movies from './pages/Movies'

export default function App() {
  return <>
    <header>
      <Navbar />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
      </Routes>
    </main>
  </>
}