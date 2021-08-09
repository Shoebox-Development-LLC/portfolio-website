import React from 'react'

const LeftCaption = ({header, text}) => {
    return (
        <div className="leftCaption">
            <div className="leftCaptionCaption">
                <div className="greyBox1"></div>
                <div className="leftCaptionContent">
                    <div className="greyBox2"><h2>{header}</h2><span className="greyCircle"></span></div>
                    <p>{text}</p>
                </div>
                
            </div>
            <div className="leftCaptionImage">

            </div>
        </div>
    )
}

export default LeftCaption