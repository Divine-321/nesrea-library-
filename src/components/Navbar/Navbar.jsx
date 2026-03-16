import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <nav>

      <a href="/" className='logo'>
        <img src={logo} alt="logo" />
      </a>

      <div>
        <ul>

          <li>
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/about"
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/features"
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              Features
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/library"
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              Library
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/resources"
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              Resources
            </NavLink>
          </li>

        </ul>

        <ul className='auth-links'>
          <li><NavLink to="/signin">Sign in</NavLink></li>
          <li><NavLink to="/signup">Sign up</NavLink></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar