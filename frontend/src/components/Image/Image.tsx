import { Box } from '@mui/material'

type ImageProps  = {
    src : string,
    alt? : string,
    height?: string,
    width?: string
} & React.ComponentProps<typeof Box>

const Image = ({src,alt,height = '100%',width = '100%'} : ImageProps) => {
  return (
    <Box
    component="img"
    sx={{
      height,
      width,
      // maxHeight: { xs: 233, md: 167 },
      // maxWidth: { xs: 350, md: 250 },
      alignSelf : 'center',
      objectFit : 'contain'
      
    }}
    alt={alt}
    src={src}
  />
  )
}

export default Image