import { NavLink } from "react-router-dom";

export default function Navbar() {
  return <nav>
    <NavLink to="/">Start</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
}