import React, { ReactElement } from 'react'
import { Card } from '@mui/material'
import {styled} from '@mui/material'

type PropType = {
  children : ReactElement[] | ReactElement,
  disableHoverEffect? : boolean,
  disableShadow? : boolean,
  direction? : 'column' | 'column-reverse' | 'row' | 'row-reverse'
} & React.ComponentProps<typeof Card>

const CardComponent = (props : PropType) => {
  const {disableHoverEffect = false,disableShadow = false,direction = 'column'} = props

const CustomCard = styled(Card)({
    display : 'flex',
    flex : 1,
    flexDirection : direction,
    marginBlock : '0.4rem',
    cursor : 'pointer',
    boxShadow: disableShadow ? '#ffffff 0px 4px 12px' : 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    border : '0.03px solid transparent',
    transition : '0.15s ease-out',
    borderRadius : '6px',
    ":hover" : {
      border : disableHoverEffect ? '0.3px solid transparent' : '0.3px solid #75757570'
    }
})
  return (
    <CustomCard {...props} >
         {props.children}
    </CustomCard>
  )
}

export default CardComponent

