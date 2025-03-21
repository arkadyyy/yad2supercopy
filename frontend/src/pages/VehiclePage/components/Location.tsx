import { Box } from '@mui/material'
import { Image, Text } from '../../../components'
import location from '../../../assets/location.svg'


const Location = ({value} : {value : string}) => {
  return (
    <Box display={'flex'} alignItems={'center'} mb={'1rem'}>
        <Image ml={'0.2rem'} width={'20px'} height={'20px'} src={location}/>
        <Text fontWeight={'600'} fontSize={'18px'}>{value}</Text>
  </Box>
  )
}

export default Location