import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const CustomText = styled(Typography)({
    color : '#363636',
    // backgroundColor : 'green',
    minWidth : 0,
    margin : 0,
    width : 'auto'
    
    
})as typeof Typography

type PropTypes = {children : string | number | string[]} & React.ComponentProps<typeof Typography>


const Text = (props : PropTypes) => {
  return (
    <CustomText  sx = {{color : props.color ? props.color : '',...props}} textAlign={'right'} {...props}>{props.children}</CustomText>
  )
}

export default Text