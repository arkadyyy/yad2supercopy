import { Box, Slider, Stack, styled } from '@mui/material'
import { Image, Text } from '../../../components'
import full_star from '../../../assets/vehicles/rating/full_star.svg'

const DATA = [
    {text : 'אמינות',value : '5.0'},
    {text : 'נוחות',value : '5.0'},
    {text : 'צריכת דלק',value : '5.0'},
    {text : 'תמורה לכסף',value : '4.8'},
]

const CustomSlider = styled(Slider)(({}) => ({
    width : '240px',
    "& .MuiSlider-thumb": {
      display : 'none'
    },
    "& .MuiSlider-rail": {
      color: '#ebebeb', ////color of the slider outside  teh area between thumbs
      height : '0.6rem'
    },
    "& .MuiSlider-track" : {
        backgroundColor : '#3D68DE',
        height : '0.6rem'
    }
  }));

  const Score = ({text,value} : {text: string,value : string | number}) => {
    return(
        <Box marginBlock={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'80%'} >
            <Text flex={1}>{text}</Text>
            <CustomSlider sx = {{marginInline : '1rem'}} disabled defaultValue={98} aria-label="Disabled slider" />
            <Text fontWeight={'600'}>{value}</Text>
       </Box>
    )
  }
  const TotalScore = () => {
    return (
        <Box flex={1.2} display={'flex'} justifyContent={'flex-start'} >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} bgcolor={'#f7f7f7'} width={'12em'} height={'10em'} borderRadius={'8px'}>
                <Text fontSize={'50px'} fontWeight={'350'}>5</Text>
                <Stack direction={'row'}>
                    {[1,2,3,4,5].map((_,key) => (
                        <Image width={'26px'} height={'26px'} key={key} p={0.4} src={full_star}/>
                    ))}
                </Stack>
                <Text color='grey' fontSize={'14px'}>4 חוות דעת</Text>
            </Box>
        </Box>
    )
  }


const Rating = () => {
  return (
    <Box marginBlock={4} >
    <Text fontSize={'18px'} fontWeight={'500'}>חוות דעת גולשים</Text>
    {/* total rating */}
    <Box display={'flex'} alignItems={'center'} marginBlock={2}>
        <TotalScore/>
        {/* ratings   */}
        <Box flex={2}>
            {DATA.map((rating,key) => (
                <Score key={key} {...rating} />
            ))}
        
        </Box>
    </Box>
  </Box>
  )
}

export default Rating