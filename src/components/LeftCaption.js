import React from "react"

const LeftCaption = ({
  header,
  text,
  idCircle,
  idLeftCaption,
  idLeftCaptionCaption,
  idLeftCaptionContent,
  idGreyBox,
}) => {
  return (
    <div className='leftCaption' id={idLeftCaption}>
      <div className='leftCaptionCaption' id={idLeftCaptionCaption}>
        <div className='leftCaptionContent' id={idLeftCaptionContent}>
          <div className='greyBox2' id={idGreyBox}>
            <h2>{header}</h2>
            <span className='greyCircle' id={idCircle}></span>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftCaption
