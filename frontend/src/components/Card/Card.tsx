import React, { ReactElement } from 'react'
import { Card,IconButton } from '@mui/material'

import {Text} from '../../components'
import {styled} from '@mui/material'

const CustomCard = styled(Card)({
    flex : 1,
    marginInline : '1rem',

    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    border : '0.03px solid transparent',
    transition : '0.15s ease-out',
    ":hover" : {
      border : '0.3px solid #75757570'
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

