import React from 'react'
import NavItem from "./NavItem"

// styles

const navStyle = {
    minHeight: "100px",
    backgroundColor: "#9A98FC",
    display: "flex",
    justifyContent: "space-between"
}

const navStyle0 = {
    backgroundColor: "#7776C6",
    maxHeight: "40px",
    marginTop: "10px",
    marginLeft: "15px"
}

const navStyle5 = {
    backgroundColor: "#7776C6",
    maxHeight: "40px",
    marginTop: "10px",
    marginRight: "15px"
}

// markup

const Nav = () => {
    return (
        <div style={navStyle}>
            <NavItem style={navStyle0}/>
            <NavItem/>
            <NavItem/>
            <NavItem/>
            <NavItem/>
            <NavItem style={navStyle5}/>
        </div>
    )
}

export default Nav
