import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const CustomText = styled(Typography)({
    color : '#363636',
})as typeof Typography

type PropTypes = {children : string | number | string[]} & React.ComponentProps<typeof Typography>


const Text = (props : PropTypes) => {
  return (
    <CustomText {...props} style = {{color : props.color ? props.color : ''}} textAlign={'right'}>{props.children}</CustomText>
  )
}

export default Text