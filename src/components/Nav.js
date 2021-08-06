import React from 'react'
import NavItem from "./NavItem"

// markup

const Nav = () => {
    return (
        <div className="nav">
            <NavItem id="navItemLeft"/>
            <NavItem/>
            <NavItem/>
            <NavItem/>
            <NavItem/>
            <NavItem id="navItemRight"/>
        </div>
    )
}

export default Nav
