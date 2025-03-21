import {  Box,Stack } from '@mui/material'
import {Button, Card} from '../../../../components'
import Tabs from './Tabs'
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import VehicleType from './VehicleType';
import Manufacturer from './Manufacturer';
import Model from './Model';
import Year from './Year';
import Other from './Other';

const Filter = () => {
  return (
    <Card sx = {{position : 'relative' , top : '-60px' }} disableHoverEffect>
        <Tabs/>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} padding={'2rem'}>
            <Box display={'flex'} justifyContent={'space-between'} width={'55%'}>
              <VehicleType/>
              <Manufacturer/>
              <Model/>
              <Year/>
              <Other/>
              <Button paddingInline={'1.4rem'} filled>חיפוש</Button>
            </Box>
            <Button sx = {{":hover" : {color : '#dc5c2d' }}} borderNone startIcon = {<NotificationAddOutlinedIcon sx={{color : '#f26632',marginInline : '0.4rem'}}/>} fontWeight={'500'} fontSize={'18px'} color='#F26632'>יצירת התראה</Button>
            
        </Stack>
    </Card>
  )
}

export default Filter