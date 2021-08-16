import React from "react"

// markup

const NavItem = ({ text, id }) => {
  return (
    <div className='navItem' id={id}>
      {text}
    </div>
  )
}

export default NavItem
