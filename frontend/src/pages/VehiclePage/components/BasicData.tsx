import { Box, Stack } from '@mui/material'
import { Image, Text } from '../../../components'
import calendar from '../../../assets/vehicles/basic_data/calendar.svg'
import hand from '../../../assets/vehicles/basic_data/hand.svg'
import odometer from '../../../assets/vehicles/basic_data/odometer.svg'

const TextWithIcon = ({text,icon} : {text : string,icon : string}) => {
    return (
        <Box marginLeft={4} display={'flex'} alignItems={'center'} >
            <Image marginLeft={1} width={'24px'} height={'24px'} src={icon}/>
            <Text>{text}</Text>
        </Box>
    )
}

const BasicData = () => {
  return (
   <Stack marginBlock={2} padding={2} border={'1px solid #e2e2e2'} borderRadius={'8px'} direction={'row'}  width={'50%'}>
        <TextWithIcon icon={calendar} text={'2021'}/>
        <TextWithIcon icon={hand} text = {'יד 2'}/>
        <TextWithIcon icon={odometer} text = {'120,000 ק״מ'}/>
   </Stack>
  )
}

export default BasicData