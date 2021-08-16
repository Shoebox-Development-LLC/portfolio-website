import React from "react"
import NavItem from "./NavItem"

// markup

const Nav = () => {
  return (
    <nav className='nav'>
      <NavItem text='Home Page' id='navItemLeft' />
      <NavItem text='About' />
      <NavItem text='Testimonials' />
      <NavItem text='Gallery' />
      <NavItem text='Newsleter' />
      <NavItem text='Contact' id='navItemRight' />
    </nav>
  )
}

export default Nav
