import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {Text} from '../../components'

type ButtonProps = {
  children : string ,
  filled? : boolean,
  fontColor? : string,
}  & React.ComponentProps<typeof Button> & React.ComponentProps<typeof Text>

const CustomButton = styled(Button)({
  paddingInline : '1.6rem',
  paddingBlock : '0.3rem',
  textAlign : 'center',
  borderRadius : '2rem',
  marginLeft : '0.6rem',
  marginBlock : '0.3rem',


}) as typeof Button

const ButtonComponent = (props : ButtonProps) => {
  const {filled = false,fontColor} = props
  return (
    <CustomButton {...props} sx = {{backgroundColor : filled ? '#FE7102' : 'transparent' , border : filled ? '1px solid transparent' : '1px solid #D9D9D9'}} >
       <Text {...props} fontSize={'16px'} color={fontColor ? fontColor : filled ? '#ffffff' : '#303030'}>
            {props.children}
       </Text>
    </CustomButton>
  )
}

export default ButtonComponent