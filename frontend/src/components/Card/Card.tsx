import React, { ReactElement } from 'react'
import { Card,IconButton } from '@mui/material'

import {Text} from '../../components'
import {styled} from '@mui/material'

const CustomCard = styled(Card)({
  flex : 1,
  marginInline : '1rem',
  cursor : 'pointer',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  border : '0.03px solid transparent',
  transition : '0.15s ease-out',
  borderRadius : '6px',
  ":hover" : {
    border : '0.3px solid #75757570'
  }
})

type PropType = {
  children : ReactElement[] | ReactElement,
  disableHoverEffect? : boolean,
  disableShadow? : boolean,
} & React.ComponentProps<typeof Card>

const CardComponent = (props : PropType) => {
  const {disableHoverEffect = false,disableShadow = false} = props



  
  return (
    <CustomCard {...props} >
       
         {props.children}
        
    </CustomCard>
  )
}

export default CardComponent

