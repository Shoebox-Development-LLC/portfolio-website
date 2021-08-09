import React from 'react'
import ShowcaseItem from "./ShowcaseItem"

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcaseBackground"></div>
            <ShowcaseItem text="Web Development"/>
            <ShowcaseItem text="App Development"/>
            <ShowcaseItem text="IT Department"/>
            <ShowcaseItem text="Blockchain"/>
            <ShowcaseItem text="Other Service"/>
            <ShowcaseItem text="Other Service"/>
        </div>
    )
}

export default Showcase
