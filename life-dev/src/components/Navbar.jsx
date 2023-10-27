import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/">
          Life<span>Dev</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : null)} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : null)} to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : null)} to="/register">Cadastrar</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : null)} to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default Navbar
