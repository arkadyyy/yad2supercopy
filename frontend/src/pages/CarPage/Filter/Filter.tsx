import { Box, } from '@mui/material'
import React from 'react'
import {Button, Card} from '../../../components'
import Tabs from './Tabs'
const Filter = () => {
  return (
    <Card sx = {{position : 'relative' , top : '-4rem' }} disableHoverEffect>
        <Tabs/>
        <Box padding={'2rem'}>
            <Button>חיפוש</Button>
        </Box>
    </Card>
  )
}

export default Filter