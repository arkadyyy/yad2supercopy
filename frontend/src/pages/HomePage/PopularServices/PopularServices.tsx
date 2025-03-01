import React from 'react'
import { Card, Image, Text } from '../../../components'
import { Box } from '@mui/material'
import comm_realestate from '../../../assets/popular_services/comm_realestate.png'
import yad_1 from '../../../assets/popular_services/yad_1.png'
import car_pricelist from '../../../assets/popular_services/car_pricelist.png'
import calculator from '../../../assets/popular_services/calculator.png'


const DATA = [
    {img : comm_realestate,text : "נדל״ן מסחרי",subtext : "מאגר הנכסים המסחריים הענק והעדכני"},
    {img : yad_1,text : "יד 1",subtext : "פרוייקטים חדים ודירות בכל רחבי הארץ"},
    {img : car_pricelist,text : "מחירון רכב",subtext : "מידעכ ומחירים בזמן אמת במחיר השוק האמיתי"},
    {img : calculator,text : "Yadata",subtext : "לדעת כמה הדירה שווה בעזרת מחשבון חדשני"},
]

const PopularServices = () => {
  return (
    <Box>
    {/* /header */}
    <Box display={'flex'} flexDirection={'row-reverse'} alignItems={'center'}>
        <Text fontWeight={'400'} fontSize={'25px'}>שירותים פופולאריים</Text>
       
    </Box>

    {/* carousel */}
           <Box display={'flex'} flexDirection={'row-reverse'}>
                {DATA.map((service,key) => (
                    <Card sx = {{display : 'flex',alignItems : 'center',height : '80px',margin : '0.5rem',padding : '0.5rem'}} key={key}>
                       <>
                        <Box flex={2}>
                            <Text fontSize={'14px'} fontWeight={'500'}>{service.text}</Text>
                            <Text fontSize={'12px'}>{service.subtext}</Text>
                        </Box>
                        <Image flex={1} src={service.img}/>
                       </>
                    </Card>
                ))}
                
            </Box>
</Box>
  )
}

export default PopularServices