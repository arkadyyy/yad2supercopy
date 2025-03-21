import { Box } from '@mui/material'

type ImageProps  = {
    src : string,
    alt? : string,
    height?: string,
    width?: string
} & React.ComponentProps<typeof Box>

const Image = (props : ImageProps) => {
  const {src,alt,height = '100%',width = '100%'} = props
  return (
    <Box
    component="img"
    sx={{
      height ,
      width  ,
      alignSelf : 'center',
      objectFit : 'contain'
      
    }}
    {...props}
    
    alt={alt}
    src={src}
  />
  )
}

export default Image