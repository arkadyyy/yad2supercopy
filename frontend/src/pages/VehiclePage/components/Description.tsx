import { Box } from '@mui/material'
import { Text } from '../../../components'

const Description = ({text} : {text : string}) => {
  return (
    <Box marginBlock={4}>
          <Text>{text}</Text>
     </Box>
  )
}

export default Description