import React from "react"

// markup

const NavItem = ({ text, id, link }) => {
  return (
    <a className='navItem' id={id} href={link}>
      {text}
    </a>
  )
}

export default NavItem
