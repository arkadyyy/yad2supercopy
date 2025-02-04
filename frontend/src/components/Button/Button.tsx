import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {Text} from '../../components'

const CustomButton = styled(Button)({
    "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(188, 194, 194, 0.2)", // Custom hover color
            opacity: 0,
            transition: "opacity 0.3s",
            height : '100%'
          },
          "&:hover::before": {
            opacity: 1,
            // padding : '1rem'
          },

}) as typeof Button

const ButtonComponent = ({children,icon} : {children : string ,icon? : React.ReactNode}) => {
  return (
    <CustomButton startIcon = {icon}>
       <Text>
            {children}
       </Text>
    </CustomButton>
  )
}

export default ButtonComponent