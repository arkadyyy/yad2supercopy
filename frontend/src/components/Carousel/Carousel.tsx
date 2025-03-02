// import React from 'react'

import './carousel.css'
import carousel_img_1 from '../../assets/top_carousel/top_carousel_img_1.png'
import carousel_img_2 from '../../assets/top_carousel/top_carousel_img_2.png'
import carousel_img_3 from '../../assets/top_carousel/top_carousel_img_3.png'


const Carousel = () => {
  return (

<div id="homepage-slider" className="st-slider">
    <input type="radio" className="cs_anchor radio" name="slider" id="slide1"/>
    <input type="radio" className="cs_anchor radio" name="slider" id="slide2"/>
    <input type="radio" className="cs_anchor radio" name="slider" id="slide3"/>
    <input type="radio" className="cs_anchor radio" name="slider" id="play1" checked={true}/>

    <div className="images">
       <div className="images-inner">
        <div className="image-slide">
          <img className="image"  src={carousel_img_1}/>
        </div>
        <div className="image-slide">
        <img className="image"  src={carousel_img_2}/>
        </div>
        <div className="image-slide">
          <img className="image"  src={carousel_img_3}/>
        </div>
      </div>
    </div>
  
    <div className="labels">  
        <div className="fake-radio">
          <label htmlFor="slide1" className="radio-btn"></label>
          <label htmlFor="slide2" className="radio-btn"></label>
          <label htmlFor="slide3" className="radio-btn"></label>
        </div>
    </div>
</div>
  )
}

export default Carousel