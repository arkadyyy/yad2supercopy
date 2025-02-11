import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import {Image,Text} from '../../components'


const CustomBox = styled(Box)({
    width : '140px',
    height : '140px',
    borderRadius: '100%',
    backgroundColor : '#EBEBEB',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    cursor : 'pointer',
    transition : '0.3s ease',
    border : '1px solid #EBEBEB',
    ":hover" : {
        backgroundColor : '#EBEBEB30',
        border : '1px solid #EBEBEB',
        
    }
})

const RoundButton = ({title,img} : {title : string,img : string}) => {
  return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <CustomBox>
                <Image width='90%' height='90%' src={img}/>
            </CustomBox>
            <Text>{title}</Text>
    </Box>   
  )
}

export default RoundButton