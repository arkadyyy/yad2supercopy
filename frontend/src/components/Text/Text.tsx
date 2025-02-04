import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const CustomText = styled(Typography)({
    color : '#363636'
})as typeof Typography

const Text = ({children} : {children : string}) => {
  return (
    <CustomText>{children}</CustomText>
  )
}

export default Text