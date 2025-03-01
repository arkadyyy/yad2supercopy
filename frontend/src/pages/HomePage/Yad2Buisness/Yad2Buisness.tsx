import { Box } from '@mui/material'
import React from 'react'
import { Card, Link, Text } from '../../../components'

const Yad2Buisness = () => {
  return (
  
    <Box sx = {{backgroundColor : '#F8F8F8',minHeight : '10rem',borderRadius : '8px',padding : '2rem'}} display={'flex'} justifyContent={'space-between'} paddingInline={'0.5rem'} alignItems={'flex-start'}>
       
       {[1,2,3].map((card) => (
         <Card sx = {{height : '90px',padding : '0.5rem'}}>
           
         </Card>
       ))}
   
         <Box  height={'100%'}>
         <Text fontWeight={'600'} fontSize={'1.3rem'}>יד 2 עסקים</Text>
  
         </Box>
   </Box>
  
  )
}

export default Yad2Buisness