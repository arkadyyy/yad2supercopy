// import React from 'react'
// import { Box } from '@mui/material'
// import { styled } from '@mui/material/styles';
import './carousel.css'
import carousel_img_1 from '../../assets/top_carousel/top_carousel_img_1.png'
import carousel_img_2 from '../../assets/top_carousel/top_carousel_img_2.png'
import carousel_img_3 from '../../assets/top_carousel/top_carousel_img_3.png'
// const CustomContainer = styled(Box)({
//     width : '80%',
//     textAlign : 'center',
//     overflow : 'hidden'
// })
// const CarouselElement = styled(Box)({

// })

const Carousel = () => {
  return (
   <div style = {{marginTop : '2rem'}}>
    <div className="carousel-container">
        <div className="carousel-element">
        <img className="carousel-element" style={{alignSelf : 'center',objectFit : 'contain',width : '100%',height :'100%'}} src={carousel_img_1}/>

            <div className="carousel-snapper"></div>
        </div>
        <div className="carousel-element">
        <img className="carousel-element"  style={{alignSelf : 'center',objectFit : 'contain',width : '100%',height :'100%'}}  src={carousel_img_2}/>
            <div className="carousel-snapper"></div>
        </div>
        <div className="carousel-element">
        <img className="carousel-element"  style={{alignSelf : 'center',objectFit : 'contain',width : '100%',height :'100%'}}  src={carousel_img_3}/>
            <div className="carousel-snapper"></div>
        </div>
    </div>
   </div>
  )
}

export default Carousel