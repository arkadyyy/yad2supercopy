import { Box, CardContent, CardMedia , Card as MuiCard } from '@mui/material'
import React from 'react'
import { Card, Text } from '../../../components'
import img1 from '../../../assets/cant_miss/img1.png'
import img2 from '../../../assets/cant_miss/img2.png'
import img3 from '../../../assets/cant_miss/img3.png'
import img4 from '../../../assets/cant_miss/img4.png'


const DATA = [
  {text : 'הרכבים הכי נחשקים סביבך עד ₪60,000 ש״ח',img : img1},
  {text : 'דירות מתח ל 2,000,000 ש״ח באזור תל אביב',img : img2},
  {text : 'המוצרים הפופולרים ביותר מהשבוע האחרון',img : img3},
  {text : 'מגזין הקריירה - המקום שיכין אותך לעבודה הבאה שלך',img : img4},
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


const CantMiss = () => {
  return (
    <Box marginTop={'3rem'}>
    {/* /header */}
    <Box display={'flex'} flexDirection={'row-reverse'} alignItems={'center'}>
        <Text fontWeight={'400'} fontSize={'25px'}>חיפושים שאסור לפספס</Text>
       
    </Box>

    {/* carousel */}
           <Box overflow={'hidden'} display={'flex'} flexDirection={'row-reverse'}>
                {DATA.map((item,key) => (
                    <CardWithImage sx = {{minWidth : 300}} key={key} imgSrc={item.img}>
                      <Text display={'block'} variant='caption' sx={{ color: 'text.primary' }}>
                          {item.text}
                      </Text>                 
                    </CardWithImage>
                ))}
                
            </Box>
</Box>
  )
}

export default CantMiss