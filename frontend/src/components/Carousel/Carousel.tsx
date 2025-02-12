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
   <div style = {{marginTop : '2rem',position : 'relative'}}>
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
    <div style={{position : 'absolute',bottom : '2.5rem',right:'3rem',display : 'flex'}}>
        {[1,2,3].map((carouselItem) => (
            <div style = {{backgroundColor : 'transparent' ,border : '1px solid #FE7102',borderRadius : '50%',width : '7px',height : '7px',marginInline : '8px'}}></div>
        ))}
    </div>
   </div>
  )
}

export default Carousel