import { Box, Divider, OutlinedInput } from '@mui/material'
import React from 'react'
import { Button, Menu } from '../../../components'

const RealestateHeader = () => {
  return (
   <Box bgcolor={'#ffffff'} padding={'1rem'} gap={2} alignItems={'center'} display={'flex'} position={'static'} height={'80px'} border={'1px solid #aeaeae'}>
    <OutlinedInput placeholder='אזור,עיר שכונה או רחוב' size='small' sx = {{borderRadius : '50px',height : '50px' ,width : '300px'}}/>
    <Divider orientation='vertical'/>
    <Menu menuBtnText='מכירה'>
    </Menu>
    <Menu menuBtnText='סוג הנכס'>

    </Menu>
    <Menu menuBtnText='מחיר'></Menu>
    <Menu menuBtnText='חדרים'></Menu>
    <Menu menuBtnText = 'סינונים נוספים'></Menu>
    <Button paddingInline={'1rem'} filled color='primary' fontColor='#ffffff'>חיפוש</Button>
    <Button border = 'none'>יצירת התראה</Button>





   </Box>
  )
}

export default RealestateHeader