import { Box,IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { Card,Link,Text } from '../../../components'
import { useState } from 'react'
import {styled} from '@mui/material'

const CustomIconButton = styled(IconButton)({
    '&:hover': {
        backgroundColor: "#e6e6e6"
      }
      ,
      width : '25px',
      height : '25px',
})


// x icon for close
const CloseBtn = () => {
    const [iconHover,setIconHover] = useState(false)

    return(
        <>
        <CustomIconButton
            onMouseOver={() => setIconHover(true) } 
            onMouseLeave={() => setIconHover(false)} 
            sx = {{right : '7px',bottom : '6px'}}
            >
                <Close sx={{width : '16px', height : '16px',color : iconHover ? '#666666' : '#afafaf',transition : '0.3s ease'}}/>
        </CustomIconButton>
        </>
    )
}


const LastSearches = () => {
  return (
    <Box sx = {{backgroundColor : '#F8F8F8',minHeight : '10rem',borderRadius : '8px',padding : '2rem'}} display={'flex'} justifyContent={'space-between'} paddingInline={'0.5rem'} alignItems={'flex-start'}>
       
    {[1,2,3].map((card) => (
      <Card sx = {{height : '90px',padding : '0.5rem'}}>
         <>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <CloseBtn/>
        <Text color='#7e7e7e' fontSize={'12px'}>נדל״ן - השכרה</Text>
        </Box>
         <Text color='#676666' fontSize={'12px'}>עיר הרצליה חדרים עד - 1.5</Text>
         </>
      </Card>
    ))}

      <Box  height={'100%'}>
      <Text fontWeight={'600'} fontSize={'1.3rem'}>חיפושים אחרונים</Text>
      <Link to = {'/'}>
      <Text fontWeight={'500'} fontSize={'14px'} color='#FE7102'>{" < כל החיפושים "} </Text>
      </Link>
      </Box>
</Box>
  )
}

export default LastSearches