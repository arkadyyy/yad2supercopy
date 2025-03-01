import { Box, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { Card, Text } from '../../../components'
import img1 from '../../../assets/recommended/img1.png'
import img2 from '../../../assets/recommended/img2.png'
import img3 from '../../../assets/recommended/img3.png'


const DATA = [
    {price : '₪41,900',text : 'איסוו די-מקס',subtext : '2011',img : img1},
    {price : '₪12,900',text : 'ניסאן קשקאי',subtext : '2008',img : img2},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},

]

const CardWithImage = (props : {children : JSX.Element | JSX.Element[]  ,imgSrc : string} & React.ComponentProps<typeof MuiCard>) => {
    
    const {imgSrc} = props
    return (
        <Card {...props}>
        <>
        <CardMedia component={'img'} height={'140'} src={imgSrc}/>
         <CardContent>
            {props.children}
         </CardContent>
        </>
     </Card>
    )
}

const Recommended = () => {
  return (
    <Box marginTop={'3rem'}>
        {/* /header */}
        <Box display={'flex'} flexDirection={'row-reverse'} alignItems={'center'}>
            <Text fontWeight={'400'} fontSize={'25px'}>מומלץ עבורך</Text>
           
        </Box>

        {/* carousel */}
               <Box overflow={'hidden'} display={'flex'} flexDirection={'row-reverse'}>
                    {DATA.map((item,key) => (
                        <CardWithImage sx = {{minWidth : 300}} key={key} imgSrc={item.img}>
                            
                            <Text gutterBottom fontWeight={'500'} >
                            {item.price}
                        </Text>
                        <Text display={'block'} variant='caption' sx={{ color: 'text.primary' }}>
                            {item.text}
                        </Text>
                        <Text display={'block'} variant='caption' sx={{ color: 'text.secondary' }}>
                          {item.subtext}
                        </Text>
                            
                        </CardWithImage>
                    ))}
                    
                </Box>
    </Box>
  )
}

export default Recommended