import React from 'react'
import { Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Button, Card, Link, Text,} from '../../../components'
import { useNavigate } from 'react-router'

const BUTTONS = [
    {text : 'נדלן', url : '/'},
    {text : 'רכב', url : '/'},
    {text : 'יד שנייה', url : '/'},
    {text : 'דרושים IL', url : '/'},
]

const LINKS = [
    {header : 'קטגוריות' , 
        subcategories : [
            {text : 'דירות למכירה' , url : '/'},
            {text : 'דירות להשכרה' , url : '/'},
            {text : 'מסחרי' , url : '/'},
            {text : 'דירות יד1' , url : '/'},
        ]},
    {header : 'שירותים' ,
         subcategories : [
            {text : 'חיפוש על גבי מפה' , url : '/'},
            {text : 'כונס נכסים' , url : '/'},
            {text : 'הערכת שווי נכס' , url : '/'},
            {text : 'משרדי תיווך בישראל' , url : '/'},
            {text : 'יד 2 ביטוח דירה' , url : '/'},
        ]},
    {header : 'בעלי מקצוע' , 
        subcategories : [
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
            {text : 'בעלי מקצוע' , url : '/'},
        ]},
]


const CustomBox = styled(Box)({
    backgroundColor : '#f8f8f8',
    height : '40vh',
    marginTop : '3rem',
    display : 'block',
    padding : '2rem'
  
  }) as typeof Box

const MoreOnSite = () => {
    const navigate = useNavigate()

  return (
    <CustomBox>
           <Container sx = {{display : 'flex'}}>
            <Box flex = {2}>
            <Text fontSize={'22px'}>עוד באתר</Text>
                <Box display={'flex'}>
                    {BUTTONS.map((btn,key) => (
                        <Button key={key+btn.text} onClick={() => navigate(btn.url)}>
                               {btn.text}
                        </Button>
                    ))}
                </Box>
                {/* links */}
                <Box display={'flex'}>
                    {LINKS.map((category,key) => (
                        <Box key={key} display={'flex'} flexDirection={'column'} marginBlock={'2rem'} marginLeft={'4rem'}>
                            <Text fontSize={'18px'} fontWeight={'600'}>{category.header}</Text>
                            <Box display={'flex'} flexDirection={'column'}>
                                {category.subcategories.map((link,key) => (
                                    <Link key={key} to={link.url}>
                                        <Text marginBlock={'0.4rem'} fontSize={'14px'} >{link.text}</Text>
                                    </Link>
                                ))}

                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
                {/* card */}
                <Card sx = {{display : 'flex' , flexDirection : 'column',padding : '2rem',alignSelf : 'center',alignItems : 'center'}}>
                   
                    <Text>יש לכם שאלה? נשמח לעזור !</Text>
                    <Text>בימים ב׳-ה׳ בין השעות 8:30-16:00</Text>
                    <Button fontWeight={'600'}>צרו קשר</Button>
                   
                </Card>
           </Container>
     
    </CustomBox>
  )
}

export default MoreOnSite