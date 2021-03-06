// import
import React from "react"
import "../styles/index.css"
import Nav from "../components/Nav"
import Title from "../components/Title"
import Spacer from "../components/Spacer"
import Showcase from "../components/Showcase"
import MotivationalText from "../components/MotivationalText"
import Helmet from "react-helmet"
import loadable from "@loadable/component"

// loadable components
const LeftCaption = loadable(() => import("../components/LeftCaption"))
const Footer = loadable(() => import("../components/Footer"))

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Shoebox Development LLC</title>
        <meta
          name='description'
          content='Shoebox Development LLC is a Web Development & IT Services company.'
        />
        <meta name='keywords' content='web design, web development, it' />
      </Helmet>
      <header>
        <Nav />
        <Title />
        <MotivationalText text='insert motivational text' />
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
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default IndexPage
