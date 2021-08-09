import React from 'react'
import NavItem from "./NavItem"

// markup

const Nav = () => {
    return (
        <nav className="nav">
            <NavItem id="navItemLeft"/>
            <NavItem/>
            <NavItem/>
            <NavItem/>
            <NavItem/>
            <NavItem id="navItemRight"/>
        </nav>
    )
}

export default Nav
