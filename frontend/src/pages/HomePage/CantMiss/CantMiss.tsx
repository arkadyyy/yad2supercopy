import { Box, Stack } from '@mui/material'
import {Text,CardWithImage} from '../../../components'
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
const CantMiss = () => {
  return (
    <Box marginTop={'3rem'}>
    {/* /header */}
    <Box marginBlock={'1rem'} display={'flex'}  alignItems={'center'}>
        <Text fontWeight={'400'} fontSize={'25px'}>חיפושים שאסור לפספס</Text>
    </Box>

    {/* carousel */}
           <Stack gap = {2}  direction={'row'} >
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

export default CantMiss