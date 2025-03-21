import { Button, Image, Menu, Text } from '../../../../components'
import { Box, Divider } from '@mui/material'


import car_img from '../../../../assets/vehicles/vehicles_type/cars.svg'
import car_color_img from '../../../../assets/vehicles/vehicles_type/cars_color.svg'
import family_car_img from '../../../../assets/vehicles/vehicles_type/family_Car.svg'
import family_car_color_img from '../../../../assets/vehicles/vehicles_type/family_car_color.svg'
import boss_car_img from '../../../../assets/vehicles/vehicles_type/boss.svg'
import boss_car_color_img from '../../../../assets/vehicles/vehicles_type/boss_color.svg'
import sport_car_img from '../../../../assets/vehicles/vehicles_type/sport.svg'
import sport_car_color_img from '../../../../assets/vehicles/vehicles_type/sport_color.svg'
import jeep_img from '../../../../assets/vehicles/vehicles_type/jeep.svg'
import jeep_color_img from '../../../../assets/vehicles/vehicles_type/jeep_color.svg'
import pickuptruck_img from '../../../../assets/vehicles/vehicles_type/pickup_truck.svg'
import pickuptruck_color_img from '../../../../assets/vehicles/vehicles_type/pickup_truck_color.svg'
import commercial_img from '../../../../assets/vehicles/vehicles_type/commercial.svg'
import commercial_color_img from '../../../../assets/vehicles/vehicles_type/commercial_color.svg'
import minivan_img from '../../../../assets/vehicles/vehicles_type/minivan.svg'
import minivan_color_img from '../../../../assets/vehicles/vehicles_type/minivan_color.svg'
import crossover_img from '../../../../assets/vehicles/vehicles_type/crossover.svg'
import crossover_color_img from '../../../../assets/vehicles/vehicles_type/crossover_color.svg'


const vehicleType = [
    {text : 'קטנים' ,value : 0, icon : {selected : car_img ,notSelected : car_color_img }},
    {text : 'משפחתיים',value : 1 , icon : {selected : family_car_img ,notSelected : family_car_color_img }},
    {text : 'מנהלים' ,value : 2, icon : {selected : boss_car_img ,notSelected :  boss_car_color_img}},
    {text : 'ספורט' ,value : 3, icon : {selected : sport_car_img ,notSelected :  sport_car_color_img}},
    {text : 'ג׳יפים' ,value : 4, icon : {selected : jeep_img,notSelected : jeep_color_img}},
    {text : 'טנדרים' ,value : 5, icon : {selected : pickuptruck_img ,notSelected : pickuptruck_color_img}},
    {text : 'מסחריות',value : 6 , icon : {selected : commercial_img ,notSelected : commercial_color_img}},
    {text : 'מיניוואנים',value : 7 , icon : {selected :minivan_img ,notSelected : minivan_color_img}},
    {text : 'קרוסאובר' ,value : 8, icon : {selected :crossover_img ,notSelected :crossover_color_img }},
]

const VehicleType = () => {
  return (
    <Menu  menuBtnText = 'סוג רכב'>

    <Box borderRadius={'8px'} width={'350px'} padding={'0.4rem'}>
        <Text padding={'0.6rem'} fontWeight={'500'} color='grey' fontSize={'14px'} >בחירת סוג הרכב היא לא חובה</Text>
       <Box display={'flex'} flexWrap={'wrap'}>
       {vehicleType.map((car) => (
            <Box sx = {{border : '0.2px solid lightgrey' ,borderRadius : '4px',width : '90px',height : '90px',margin : '0.6rem',padding :'1rem',cursor : 'pointer'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                {/* <SvgIcon color='error'>
                   {chevron}
                </SvgIcon> */}
                <Image src={car.icon.selected}/>
                <Text fontSize={'14px'}>{car.text}</Text>
            </Box>
        ))}      
        </Box>
       <Divider/>
            <Box padding={'1rem'}>
            <Text fontWeight={'500'} color='grey' fontSize={'14px'} >סינונים פופולארים</Text>
            <Box display={'flex'} >
                {['היברידי','חשמלי','יוקרה'].map((filter) => (
                    <Box component={'a'} display={'flex'} justifyContent={'center'}  sx = {{border : '1px solid lightgrey',padding : '0.4rem',flex : 1,marginLeft : '1rem',marginBlock : '1rem',borderRadius: '4px',cursor : 'pointer'}}>
                        <Text fontSize={'14px'}>{filter}</Text>
                    </Box>
                ))}
            </Box>
            </Box>
       <Divider/>
       <Box display={'flex'} width={'100%'} justifyContent={'space-between'} paddingInline={'1rem'}>
            <Button borderNone fontWeight={'400'} >איפוס</Button>
            <Button borderNone color='primary' fontWeight={'500'}>אישור</Button>
       </Box>
    </Box>
            
</Menu>
  )
}

export default VehicleType