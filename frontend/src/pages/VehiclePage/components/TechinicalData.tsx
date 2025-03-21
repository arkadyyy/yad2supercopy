import { Box } from '@mui/material'
import { Text } from '../../../components'

const DATA = [
    {header : 'מרכב' , value : 'פנאי-שטח'},
    {header : 'סוג הנעה' , value : '4X2'},
    {header : 'טורבו' , value : 'כן'},  
]

const TechinicalData = () => {
  return (
    <Box>
        <Text fontSize={'20px'} fontWeight={'500'}>מפרט טכני</Text>
        <Box display={'flex'} flexWrap={'wrap'} width={'86%'}>
            {DATA.map((value,key) => (
                <Box key={key} marginBlock={'1rem'}  display={'flex'} width={'50%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text flex={1}  color='gray'>{value.header}</Text>
                    <Text flex={1} >{value.value}</Text>
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default TechinicalData