import { Card, Text } from '../../../../components'
import { Box, CardMedia } from '@mui/material'
import { DATA } from '../../data'
import { useNavigate } from 'react-router'

const ListCard = (props : {carData : typeof DATA[0]}) => {
    const navigate = useNavigate()
    const {carData} = props
    const handleNavigation = () => {
        navigate('/vehicle/car')
    }
    return (
      <Card onClick={handleNavigation}  direction = 'row' disableHoverEffect sx = {{padding : '0.2rem',maxHeight : '180px',marginTop : '2rem'}}>
        <CardMedia component={'img'} sx = {{width : 200,borderRadius : '8px',flex : 1}} src={carData.images[0]}/>
          <Box flex={3} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} >
            <Box padding={'1rem'}>
              <Text fontWeight={'500'} fontSize={'20px'}>{carData.model}</Text>
              <Text>{carData.trimLevel}</Text>
              <Text fontWeight={'400'} fontSize={'18px'}>{carData.modelYear} • יד {carData.hand} </Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0.4rem'}>
                <Box display={'flex'}>
                  {['היברידי','חסכוני','בקרת שיוט אדפטיבית'].map((_,key) => (
                    <Box borderRadius={'6px'} margin={'0.2rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor={'lightgray'} padding={'0.4rem'}><Text fontWeight={'500'} fontSize={'12px'}>{_}</Text></Box>
                  ))}
                </Box>
                <Text fontWeight={'500'} fontSize={'22px'}>₪{carData.price.toLocaleString()}</Text>
            </Box>
          </Box>
      </Card>
    )
  }

export default ListCard