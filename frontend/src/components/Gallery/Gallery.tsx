import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const Gallery = (props : {imgs : string[]}) => {
    const {imgs} = props
  return (
    <ImageList
    gap={10}
    sx={{  height: 420,marginTop : '2rem' }}
    variant="quilted"
    cols={3}
    rowHeight={210}
  >
    <ImageListItem cols={2} rows={2}>
      <img style={{borderTopRightRadius : '8px',borderBottomRightRadius : '8px'}} src={imgs[0]}/>
    </ImageListItem>
    <ImageListItem cols={1} rows={1}>
      <img style = {{borderTopLeftRadius : '8px'}} src={imgs[1]}/>
    </ImageListItem>
    <ImageListItem cols={1} rows={1}>
      <img style = {{borderBottomLeftRadius : '8px'}} src={imgs[2]}/>
    </ImageListItem>
   
  </ImageList>
  )
}

export default Gallery