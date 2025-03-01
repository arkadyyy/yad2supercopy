// import React from 'react'
import { Header,Footer } from '../../components'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const Root = () => {
  return (
   <Box sx = {{overflowX : 'hidden'}} margin={0} position={'relative'} height={'400vh'} bgcolor={'#ffffff'}>
    
    <Header/>
    <Outlet/>
    <Footer/>
   </Box>
  )
}

export default Root