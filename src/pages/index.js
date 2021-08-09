import * as React from "react"
import "../styles/index.css"
import Nav from "../components/Nav"
import Title from "../components/Title"
import Spacer from "../components/Spacer"
import Showcase from "../components/Showcase"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Shoebox Development LLC</title>
      <header>
      <Nav/>
      <Title/>
      <Spacer/>
      <Showcase/>
      <Spacer/>
      </header>
      enter content here sam
    </main>
  )
}

export default IndexPage
