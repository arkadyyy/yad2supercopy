import { Card as MuiCard, CardContent, CardMedia } from "@mui/material"



const CardWithImage = (props : {children : JSX.Element | JSX.Element[]  ,imgSrc : string} & React.ComponentProps<typeof MuiCard>) => {
    
    const {imgSrc} = props
    return (
        <MuiCard {...props}>
        <>
        <CardMedia component={'img'} height={'140'}  src={imgSrc}/>
         <CardContent>
            {props.children}
         </CardContent>
        </>
     </MuiCard>
    )
}

export default CardWithImage