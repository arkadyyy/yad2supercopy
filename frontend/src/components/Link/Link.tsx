import React from 'react'
import { Link } from 'react-router'

type PropType = {children : string | number | JSX.Element ,to : string,fontSize? : string,margin? : string,marginBlock? : string} & React.ComponentProps<typeof Link>

const CustomLink = (props : PropType) => {
    const style = {
        textDecoration : 'none',
        fontFamily : 'Rubik',
    }
    const {fontSize,color,marginBlock} = props
  return (
    <Link {...props} style={{...style,color,fontSize ,marginBlock }} >{props.children}</Link>
  )
}

export default CustomLink