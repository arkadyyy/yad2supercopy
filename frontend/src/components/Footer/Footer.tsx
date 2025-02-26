import { Box, Container, Divider } from '@mui/material'
import React from 'react'
import Text from '../Text/Text'
import { Image, Link } from '..'
// import { Link } from 'react-router'

const menu = [
    {title : 'נדל״ן',subCategories : [{title : 'מכירה' , url : '/realestate/forsale'},{title : 'השכרה',url : '/realestate/rent'},{title : 'מסחרי',url : '/realestate/commercial'},{title : 'כונס נכסים',url : '/kones/realestate'},{title : 'דירות חדשות',url : '/realestate/newprojects'},]},
    {title : 'רכב',subCategories : [{title : 'פרטיים ומסחריים',url : '/vehicles/cars'},{title : 'משאיות',url : '/vehicles/trucks'},{title : 'אופנועים',url : '/vehicles/motorcycle'}]},
    {title : 'יד שנייה',subCategories : [{title : 'לכל המוצרים', url : '/lobby/products'},{title : 'ריהוט', url : '/lobby/products/furniture'}]},
    {title : 'דרושים',subCategories : [{title : 'כל הקטגוריות', url : '/drushim'}]},
    {title : 'עוד באתר',subCategories : [{title : 'חיות מחמד',url : '/pets/all'},{title : 'בעלי מקצוע',url : '/b144'},{title : 'מגזין יד2',url : 'https://magazine.yad2.co.il'}]}
]
const roundBtns = [
    {url : '/apple' , img : ''},
    {url : '/play_store' , img : ''},
    {url : '/facebook' , img : ''},
    {url : '/youtube' , img : ''},

]
const bottomLinks = [
    {title : 'תקנון',url : '/'},
    {title : 'הצהרת נגישות',url : '/'},
    {title : 'מדיניות פרטיות',url : '/'},
    {title : 'מפצ האתר',url : '/'},
    {title : 'צור קשר',url : '/'},
    {title : 'ביטול עסקה',url : '/'},
    {title : 'קריירה ביד2',url : '/'},
    {title : 'פרויקטי נדלניישן',url : '/'},
]

// small round social media\stores buttons
const RoundBtn = ({img,url} : {img : string,url : string}) => {
    return(
        <Box bgcolor={'#000000'} borderRadius={'100%'} width={'40px'} height={'40px'} margin={'0.5rem'}>
           <Link to={url}>
                <Image width={'20px'} height={'20px'} src={img}/>
           </Link>
        </Box>
    )
}

const Footer = () => {
  return (
    <Box margin={0} position={'relative'} bottom={'0px'} bgcolor={'#2f2f2f'} width={'100%'} height={'45vh'}>
        <Container style={{display : 'flex', flexDirection : 'row-reverse' ,alignItems : 'flex-start',justifyContent : 'space-between'}}>
           {menu.map((menuItem,key) => (
            <Box marginTop={'4rem'} paddingRight={'4rem'} alignItems={'end'} display={'flex'} flexDirection={'column'} key={key}>
                <Text marginBottom={'0.5rem'} fontSize={'1.2em'} color='#EBEBEB'>{menuItem.title}</Text>
                {menuItem.subCategories.map((item,key) => (
                    <Link marginBlock='0.2rem' fontSize='0.9em' color='#b6b6b6' key={key} to={item.url}>{item.title}</Link>
                ))}
            </Box>
           ))}
           
        </Container>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} >
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} >
            {roundBtns.map((btn,key) => (
                <RoundBtn key={key+btn.url} img={btn.img} url={btn.url}/>
            ))}
            </Box>
            <Text color='#b6b6b6' width={'60%'} fontSize={'13px'}>
                כל הזכויות שמורות לחברת קורל תל מפעילות לוח יד2 - לוח מודעות: דרושים, דירות להשכרה, בתים למכירה, בתים להשכרה, העברת בתים, הובלות, לימודים, קניות, בעלי מקצוע, אצבע, תיירות ועוד. אין לעשות שימוש בכל התכנים המופיעים בלוח יד2.

            </Text>
            <Divider />
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                {bottomLinks.reverse().map((link,key) => (
                    <Link margin='1rem' fontSize='0.9em' color='#b6b6b6' key={key+link.url} to={link.url}>{link.title}</Link>
                ))}
            </Box>
           </Box>
        <Text dir='rtl' left={'50%'} position={'absolute'} bottom={'1px'} color='#ffffff'>גרסה:production</Text>
    </Box>
  )
}

export default Footer