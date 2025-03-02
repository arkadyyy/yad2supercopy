import React from 'react'
import img1 from '../../../assets/vehicles/logos/img1.png'
import img2 from '../../../assets/vehicles/logos/img2.png'
import img3 from '../../../assets/vehicles/logos/img3.png'
import img4 from '../../../assets/vehicles/logos/img4.png'
import img5 from '../../../assets/vehicles/logos/img5.png'
import img6 from '../../../assets/vehicles/logos/img6.png'
import img7 from '../../../assets/vehicles/logos/img7.png'
import img8 from '../../../assets/vehicles/logos/img8.png'
import { Box,Stack,Divider,Paper } from '@mui/material'
import { Image, Text } from '../../../components'

import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const DATA = [
    {img : img1 , text : 'נותנים זכות קדימה למחיר!',pathname : '/' },
    {img : img2 , text : 'מגוון דגמים מ₪980 לחודש',pathname : '/' },
    {img : img3 , text : 'איוניק5 מ - ₪1163 לחודש*',pathname : '/' },
    {img : img4 , text : 'מגוון דגמי קיה מיד ראשונה',pathname : '/' },
    {img : img5 , text : 'מגוון רכבים החל מ ₪84,900',pathname : '/' },
    {img : img6 , text : 'חגיגת טרייד אין באלבר!',pathname : '/' },
    {img : img7 , text : 'X-CHANGE הזמן להתחדש!',pathname : '/' },
    {img : img8 , text : 'ביטוח חובה מתנה לרכב יד שנייה!',pathname : '/' },
]

const Delearships = () => {
  return (
   <Stack direction={'row'} divider = {<Divider orientation="vertical" flexItem />} spacing={0}>
        {DATA.map((block,key) => (
            <Box sx = {{cursor : 'pointer'}} paddingRight={'0.3rem'} key={key}>
                <Image width={'4rem'} height={'4rem'} src={block.img}/>
                <Text marginTop={'-1rem'} fontSize={'12px'}>{block.text}</Text>
            </Box>
        ))}
   </Stack>
  )
}

export default Delearships