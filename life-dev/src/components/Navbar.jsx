import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <NavLink to="/">
        <span>LifeDev</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
      </ul>
    </>

  )
}

export default Navbar
