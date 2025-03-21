import { Box, Fab, Stack } from '@mui/material'
import {CardWithImage, Text} from '..'
import { useRef, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ManualCarousel = ({data}) => {
        const scrollRef = useRef<HTMLElement >()
        const [currentIndex,setCurrentIndex] = useState(0)
    
        const nextCard = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -310, behavior: "smooth" });
              }
          };
        const prevCard = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 310, behavior: "smooth" });
              }
          };
  return (
    <Box position={'relative'}>
            {/* stack navigation btns */}
            <Fab 
            disableFocusRipple
            onClick={nextCard} 
            disableRipple 
            sx = {{position : 'absolute' , left : '-2em',top : '36%'}}
             size='small'>
                <KeyboardArrowLeftIcon/>
            </Fab>
            <Fab onClick={prevCard} disableRipple sx = {{position : 'absolute' , right : '-2em',top : '36%'}}  size='small'>
                <KeyboardArrowRightIcon/>
            </Fab>
            {/* end stack navigation btns */}
            
            {/* card container */}
            <Stack 
                ref = {scrollRef}
                sx = {{
                    // overflow : 'hidden',
                    overflowY : 'scroll',
                    transform : `translateX(${currentIndex * 300}px)`,
                   }}
                direction={'row'} 
                gap={1}
                minHeight={300}
                >
                {data.map((item,key) => (
                    <CardWithImage sx = {{minWidth : 300,height : '100%'}} key = {key+item.year} imgSrc = {item.img}>
                        <Text gutterBottom fontWeight={'500'} >
                            {item.price}
                        </Text>
                        <Text display={'block'} variant='caption' sx={{ color: 'text.primary' }}>
                             {item.model}
                        </Text>
                        <Text display={'block'} variant='caption' sx={{ color: 'text.secondary' }}>
                             {item.year}{"•"}{"יד "}{item.hand}
                        </Text>
                    </CardWithImage>
                ))}
            </Stack>
        </Box>
  )
}

export default ManualCarousel