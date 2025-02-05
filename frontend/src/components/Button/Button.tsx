import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {Text} from '../../components'
import { Height, Padding } from '@mui/icons-material'
import zIndex from '@mui/material/styles/zIndex'

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

const ButtonComponent = ({children,icon} : {children : string ,icon? : React.ReactNode}) => {
  return (
    <CustomButton sx={{ '&.MuiButton-root:hover':{bgcolor: "rgba(185, 185, 185, 0.2)"} }} startIcon = {icon}>
       <Text>
            {children}
       </Text>
    </CustomButton>
  )
}

export default ButtonComponent