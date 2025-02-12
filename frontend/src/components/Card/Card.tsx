import React, { ReactElement } from 'react'
import { Card,IconButton } from '@mui/material'

import {Text} from '../../components'
import {styled} from '@mui/material'

const CustomCard = styled(Card)({
    flex : 1,
    marginInline : '1rem',
    ":hover" : {

    }
})
const CardComponent = ({children} : {children : ReactElement}) => {
  return (
    <CustomCard>
       
          {children}
        
    </CustomCard>
  )
}

export default CardComponent