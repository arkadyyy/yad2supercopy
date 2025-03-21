import { Box, Stack } from '@mui/material'
import { Text } from '../../../components'


const DATA = [
    {key : 'קילומטרג׳',value : '120,000'},
    {key : 'בעלות נוכחית',value : 'ליסינג'},
    {key : 'בעלות קודמת',value : 'ליסינג'},
    {key : 'תאריך עלייה לכביש',value : '05/2021'},
    {key : 'מרכב',value : 'פנאי-שטח'},
    {key : 'כוח סוס',value : '130'},
    {key : 'צריכת דלק משולבת',value : '24.39'},
    {key : 'צבע',value : 'אפור עכבר'},
    {key : 'טסט עד',value : '01/05/2025'},
    {key : 'תיבת הילוכים',value : 'אוטומטי'},
    {key : 'סוג מנוע',value : 'דיזל'},
    {key : 'מושבים',value : '5'},
    {key : 'נפח מנוע',value : '1499'},
]

const KeyValue = ({data} : {data : typeof DATA[0]}) => {
    const {key,value} = data
    return(
        <Box display={'flex'}  mb={1} alignItems={'flex-end'} justifyContent={'flex-end'} height={'30px'}   >
            <Text flex={2} color='grey'>{key}</Text>
            <Text flex={1}>{value}</Text>
        </Box>
    )
}

const MoreDetails = () => {
  return (
    <Box mt={'1rem'}>
          <Text marginBlock={3} fontSize={'20px'} fontWeight={'500'}>פרטים נוספים</Text>
          <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'} height={'300px'} >
            {DATA.map((value,key) => (
                <KeyValue key={key} data = {value}/>
            ))}
          </Box>
    </Box>
  )
}

export default MoreDetails