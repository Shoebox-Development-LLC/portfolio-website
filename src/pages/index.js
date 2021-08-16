import * as React from "react"
import "../styles/index.css"
import Nav from "../components/Nav"
import Title from "../components/Title"
import Spacer from "../components/Spacer"
import Showcase from "../components/Showcase"
import LeftCaption from "../components/LeftCaption"
import MotivationalText from "../components/MotivationalText"

// markup
const IndexPage = () => {
  return (
    <>
      <title>Shoebox Development LLC</title>
      <header>
      <Nav/>
      <Title/>
      <Spacer/>
      <MotivationalText text="insert motivational text"/>
      <Spacer/>
      <Showcase/>
      <Spacer/>
      </header>
      <main>
        <LeftCaption header="Our Story" text="This is a sample block of text that will be replaced some time in the
future. pppppppeeennnnnniisssss"/>
      enter content here sam
      </main>
      <footer>

      </footer>
    </>
  )
}

export default IndexPage
