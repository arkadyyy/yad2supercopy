import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {Text} from '../../components'
// import { ExtendButtonBase,ButtonTypeMap } from '@mui/material'

type ButtonProps = {
  children : string ,
  icon? : React.ReactNode,
  onClick? : React.MouseEventHandler<HTMLButtonElement>,
  onMouseEnter? : React.MouseEventHandler<HTMLButtonElement> | undefined,
  onMouseLeave? : React.MouseEventHandler<HTMLButtonElement>,
  key : string,
  id?: string,
  sx? : any,
  ref? : any
  // ariaControls? : string | undefined,
  // ariaHaspopup? : string | undefined
} 
// & ExtendButtonBase<ButtonTypeMap<{}, "button">>

const CustomButton = styled(Button)({
    // "&::before": {
    //         content: '""',
    //         position: "absolute",
    //         inset: 0,
    //         backgroundColor: "rgba(185, 185, 185, 0.2)", // Custom hover color
    //         opacity: 1,// change back to 0
    //         // height : '77px',
    //         // transition: "opacity 0.3s",
    //         margin : '11px'
            
    //       },
    //       "&:hover::before": {
    //         opacity: 1,
    //         padding : '1rem'
    //       },

}) as typeof Button

const ButtonComponent = (props : ButtonProps) => {
  const {id,sx,ref} = props
  return (
    <CustomButton ref = {ref} id = {id}   sx={{ '&.MuiButton-root:hover':{bgcolor: "rgba(185, 185, 185, 0.2)"},...sx }} >
       <Text>
            {props.children}
       </Text>
    </CustomButton>
  )
}

export default ButtonComponent