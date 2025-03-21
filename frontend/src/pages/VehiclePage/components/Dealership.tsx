import { Box } from '@mui/material'
import { Card, Image, Text } from '../../../components'
import dealership_car from '../../../assets/vehicles/delaership_car.png'


const Dealership = () => {
  return (
    <Box p={'1rem'} borderRadius={'8px'} bgcolor={'#f7f7f7'} >
    <Text fontWeight={'500'} fontSize={'18px'}>רכב דומה מסוכנויות</Text>
    <Card disableHoverEffect sx={{padding : '0.4rem'}}>
      <Box display={'flex'} gap={2.4}>
        <Image bgcolor={'red'} sx={{objectFit :'cover',borderRadius : '8px'}} height={'8rem'} src={dealership_car} flex={1}/>
        <Box flex={2} display={'flex'}>
            <Box flex={3}>
                <Text fontWeight={'500'} fontSize={'20px'}>סיטרואן c5 איירקרוס</Text>
                <Text>Feel אוט׳ דיזל 1.5 (130 כ״ס) [2019-2025]</Text>
                <Text>2020 • יד 1</Text>
            </Box>
            <Box ml={2} display={'flex'} flexDirection={'column'} justifyContent={'end'} alignItems={'end'} flex={1}>
                {/* <Image/> */}
                <Text fontSize={'10px'} fontWeight={'500'} color='lightgray'>טרייד מוביל</Text>
                <Text fontSize={'22px'} fontWeight={'500'}>₪83,325</Text>
            </Box>
        </Box>
      </Box>
      
    </Card>
  </Box>
  )
}

export default Dealership