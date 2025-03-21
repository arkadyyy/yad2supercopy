import { Card, Image, Text } from '../../../../components'
import { Box, Divider } from '@mui/material'
import { SIDE_BANNER_OPT } from '../../data'
import { ChevronLeft } from '@mui/icons-material'
const CardCommercial = () => {
  return (
    <Card  disableHoverEffect sx = {{width : '100%',borderRadius : '8px',border : '0.8px solid #f7f7f7',boxShadow : 'none'}} variant="outlined">
        <Box display={'flex'} alignItems={'center'} bgcolor={'#f7f7f7'} width={'18rem'} minHeight={'36px'}>
        <Text sx = {{marginRight : '1rem'}} fontSize={'14px'} fontWeight={'400'}>כל מה שצריך לדעת בקניית רכב</Text>
        </Box>
        {SIDE_BANNER_OPT.map((item,key) =>(
            <>
                <Box key={key} display={'flex'} alignItems={'center'} padding={'0.4rem'}>
                <Image flex={1} width={'50px'} height={'50px'} src={item.img}  />
                <Box marginRight={'1rem'} flex={2} marginBlock={'1rem'}>
                    <Text fontWeight={'600'}>{item.header}</Text>
                    <Text fontSize={'14px'} color="#8c8c8c">{item.text}</Text>
                </Box>
                <ChevronLeft/>
                
                </Box>
                <Divider orientation="horizontal" flexItem/>
            </>
        ))}
      </Card>
  )
}

export default CardCommercial