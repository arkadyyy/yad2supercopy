import { Box, Divider } from '@mui/material'
import { Text } from '../../../components'

const DATA = [
    'מזגן',
    'חיישני לחץ אוויר בצמיגים',
    'בקרת יציבות',
    'מצלמת רוורס',
    'זיהוי מצב התקרבות מסוכנת',
    'בקרת סטייה מנתיב',
    'הגה כוח',
    'ABS',
    'חלונות חשמל',
    'זיהוי בשטח ״מת״',
    'תאורה אוטומטית בנסיעה קדימה',
    'ניתור מרחק מלפנים',
    'גלגלי מגנזיום',
    'כריות אוויר',
    '4X2',
    'זיהוי הולכי רגל',
    'זיהוי תמרורימ תנועה',
    'מערכת עזר לבלמים',
]

const Accessories = () => {
  return (
   <Box minHeight={460} >
        <Text fontWeight={'500'} fontSize={'20px'}>אבזור</Text>
        {/* the list */}
        <Box marginBlock={'1rem'} display={'flex'} flexDirection={'column'} flexWrap={'wrap'} maxHeight={360}>
            {DATA.map((item,key)  => (
                <Text marginBlock={'0.8rem'} key={key}>• {item}</Text>
            ))}
        </Box>
        <Text fontSize={'14px'} color='lightgrey'>*האבזור עלול להשתנות בין רכב לרכב.יש לוודא מול מוכר הרכב את האבזור המדוייק.</Text>
        <Divider sx = {{marginBlock : '3rem'}} />
   </Box>
  )
}

export default Accessories