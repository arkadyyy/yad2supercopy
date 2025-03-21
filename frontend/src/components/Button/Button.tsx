import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {Text} from '../../components'

type ButtonProps = {
  children : string ,
  filled? : boolean,
  fontColor? : string,
  borderNone? : boolean,
}  & React.ComponentProps<typeof Button> & React.ComponentProps<typeof Text>

const CustomButton = styled(Button)({
  // paddingInline : '1.6rem',
  // paddingBlock : '0.3rem',
  textAlign : 'center',
  borderRadius : '2rem',
  // marginLeft : '0.6rem',
  marginBlock : '0.3rem',
  // position : 'relative',
  // width : '100%',
  
  "& .MuiButton-endIcon": {
    paddingInline : '2px'
},
// "& .MuiButton-startIcon": {
//     position: "absolute",
//     // left: "1rem",
// },



}) as typeof Button

const ButtonComponent = (props : ButtonProps) => {
  const {filled = false,fontColor,borderNone = false} = props
  return (
    <CustomButton {...props} sx = {{...props.sx,backgroundColor : filled ? '#FE7102' : 'transparent' , border : borderNone ? 'none' : filled ? '1px solid transparent' : '1px solid #D9D9D9'}}  >
       <Text fontSize={'16px'} color={fontColor ? fontColor : filled ? '#ffffff' : '#303030'} {...props} >
            {props.children}
       </Text>
    </CustomButton>
  )
}

export default ButtonComponent