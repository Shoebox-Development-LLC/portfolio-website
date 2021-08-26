import React from "react"
import NavItem from "./NavItem"

// markup

const Nav = () => {
  return (
    <nav className='nav'>
      <NavItem text='Home Page' id='navItemLeft' link='/' />
      <NavItem text='About' link='/about' />
      <NavItem text='Testimonials' link='/testimonials' />
      <NavItem text='Gallery' link='/gallery' />
      <NavItem text='Newsleter' link='/newsletter' />
      <NavItem text='Contact' id='navItemRight' link='/contact' />
    </nav>
  )
}

export default Nav
