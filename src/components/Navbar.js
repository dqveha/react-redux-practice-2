import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <Link to="/" className="brand-logo left">Some'Times</Link>
          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Navbar) //SUPERCHARGING THE COMPONENT!
