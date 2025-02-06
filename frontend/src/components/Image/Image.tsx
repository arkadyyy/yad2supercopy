import { Box } from '@mui/material'

type ImageProps  = {
    src : string,
    alt? : string,
    height?: string,
    width?: string
}

const Image = ({src,alt,height = '50px',width = '50px'} : ImageProps) => {
  return (
    <Box
    component="img"
    sx={{
      height,
      width,
      maxHeight: { xs: 233, md: 167 },
      maxWidth: { xs: 350, md: 250 },
      alignSelf : 'center',
      objectFit : 'contain'
      
    }}
    alt={alt}
    src={src}
  />
  )
}

export default Image