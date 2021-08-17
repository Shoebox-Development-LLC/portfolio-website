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
        <Nav />
        <Title />
        <Spacer />
        <MotivationalText text='insert motivational text' />
        <Spacer />
        <Showcase />
        <Spacer />
      </header>
      <main>
        <LeftCaption
          header='Our Story'
          text='This is a sample block of text that will be replaced some time in the
future. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin nunc ex. Quisque ut ante vel nisi malesuada luctus at in nisl. Suspendisse potenti. Sed at neque id risus iaculis commodo. Morbi nec ligula ante. Duis ac dui elit. Cras sit amet dolor laoreet, vestibulum erat a, laoreet libero. Vivamus mollis consectetur nisl, sed dictum arcu pharetra eget. Vivamus laoreet tellus sem, non hendrerit augue elementum eu. Sed vel mollis est, vehicula tincidunt tortor. Curabitur faucibus mauris a risus pellentesque, sed finibus turpis efficitur. Quisque vehicula, orci eu suscipit luctus, libero mauris molestie lectus, vitae convallis est risus eget sem.'
          idCircle='greyCircle0'
          idGreyBox='greyBox20'
          idLeftCaptionContent='leftCaptionContent0'
        />
        <Spacer />
        <LeftCaption
          header='Our Mission'
          text='This is a sample block of text that will be replaced some time in the future. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin nunc ex. Quisque ut ante vel nisi malesuada luctus at in nisl. Suspendisse potenti. Sed at neque id risus iaculis commodo. Morbi nec ligula ante. Duis ac dui elit. Cras sit amet dolor laoreet, vestibulum erat a, laoreet libero. Vivamus mollis consectetur nisl, sed dictum arcu pharetra eget. Vivamus laoreet tellus sem, non hendrerit augue elementum eu. Sed vel mollis est, vehicula tincidunt tortor. Curabitur faucibus mauris a risus pellentesque, sed finibus turpis efficitur. Quisque vehicula, orci eu suscipit luctus, libero mauris molestie lectus, vitae convallis est risus eget sem.'
          idCircle='greyCircle1'
          idLeftCaption='leftCaption1'
          idLeftCaptionCaption='leftCaptionCaption1'
          idGreyBox='greyBox21'
          idLeftCaptionContent='leftCaptionContent1'
        />
        <Spacer />
      </main>
      <footer></footer>
    </>
  )
}

export default IndexPage
