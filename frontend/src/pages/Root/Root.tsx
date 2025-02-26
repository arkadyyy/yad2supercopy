// import React from 'react'
import { Header,Footer } from '../../components'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const Root = () => {
  return (
   <Box margin={0} position={'relative'} height={'300vh'} bgcolor={'#ffffff'}>
    
    <Header/>
    <Outlet/>
    <Footer/>
   </Box>
  )
}

export default Root