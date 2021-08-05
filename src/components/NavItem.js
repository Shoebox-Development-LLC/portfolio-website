import React from 'react'

// styles

const navItemStyle = {
    backgroundColor: "#7776C6",
    maxHeight: "40px",
    marginTop: "10px"
}

// markup

const NavItem = ({ style }) => {
    return (
        <div style={ style || navItemStyle}>
            test content because it cant be blank
        </div>
    )
}

export default NavItem
