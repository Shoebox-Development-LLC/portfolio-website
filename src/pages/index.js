import * as React from "react";
import "../styles/index.css";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Spacer from "../components/Spacer";
import Showcase from "../components/Showcase";
import LeftCaption from "../components/LeftCaption";
import MotivationalText from "../components/MotivationalText";

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
future. pppppppeeennnnnniisssss'
          idCircle='greyCircle0'
          idGreyBox='greyBox20'
        />
        <Spacer />
        <LeftCaption
          header='Our Mission'
          text='This is a sample block of text that will be replaced some time in the future. hello this is breaking the design also why does the word break like that'
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
  );
};

export default IndexPage;
