import * as React from "react"
import "../styles/index.css"
import Nav from "../components/Nav"
import Title from "../components/Title"
import Spacer from "../components/Spacer"
import Showcase from "../components/Showcase"

// markup
const IndexPage = () => {
  return (
    <>
      <title>Shoebox Development LLC</title>
      <header>
      <Nav/>
      <Title/>
      <Spacer/>
      <Showcase/>
      <Spacer/>
      </header>
      <main>
      enter content here sam
      </main>
      <footer>

      </footer>
    </>
  )
}

export default IndexPage
