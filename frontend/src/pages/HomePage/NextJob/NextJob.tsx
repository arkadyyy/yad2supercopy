import { Box, Stack } from '@mui/material'
import {CardWithImage, Text } from '../../../components'
import img1 from '../../../assets/next_job/img1.png'
import img2 from '../../../assets/next_job/img2.png'
import img3 from '../../../assets/next_job/img3.png'
import img4 from '../../../assets/next_job/img4.png'

const DATA = [
  {text : 'הסוכנת החכמה',subtext : "קבלו הצעת עבודה ישירות למייל",img : img1},
  {text : 'קורות חיים',subtext : "כתיבת קורות חיים מקצועיים בחינם",img : img2},
  {text : 'מחשבון שכר',subtext : "בו תוכלו לערוך חישוב מדוייק של השכר נטו אותו תקבלו",img : img3},
  {text : 'פרסום משרה',subtext : "גיוס עובדים במהירות ובקלות!",img : img4},
]

const NextJob = () => {
  return (
    <Box marginTop={'3rem'}>
    {/* /header */}
    <Box marginBlock={'1rem'} display={'flex'}  alignItems={'center'}>
        <Text fontWeight={'400'} fontSize={'25px'}>בדרך למשרה הבאה שלך</Text>
    </Box>
    {/* carousel */}
    <Stack direction={'row'} gap = {2} >
        {DATA.map((item,key) => (
            <CardWithImage sx = {{minWidth : 280}} key={key} imgSrc={item.img}>
                <Text display={'block'} variant='caption' sx={{ color: 'text.primary' }}>
                    {item.text}
                </Text>                 
            </CardWithImage>
        ))}    
     </Stack>
    </Box>
  )
}

export default NextJob