import { Box, Divider, Stack } from '@mui/material'
import { Text } from '../../../components'

const SAFTEY_RANK = [
    {val : 1 , color : '#BB0200'},
    {val : 2 , color : '#E87308'},
    {val : 3 , color : '#FFC901'},
    {val : 4 , color : '#3AB895'},
    {val : 5 , color : '#3890AB'},
    {val : 6 , color : '#2C98D0'},
    {val : 7 , color : '#037BC8'},
    {val : 8 , color : '#097EFC'},
]

const POLLUTION_RANK = [
{val : 1, color : '#294F40'},
{val : 2, color : '#056543'},
{val : 3, color : '#027748'},
{val : 4, color : '#02904B'},
{val : 5, color : '#06A550'},
{val : 6, color : '#4AB747'},
{val : 7, color : '#A7CD3B'},
{val : 8, color : '#FEF001'},
{val : 9, color : '#FFCB03'},
{val : 10, color : '#FCA521'},
{val : 11, color : '#F48223'},
{val : 12, color : '#F05821'},
{val : 13, color : '#DA371F'},
{val : 14, color : '#CA232B'},
{val : 15, color : '#A82C31'},
]


const SafteyAccessories = ({level} : {level : number}) => {
    return (
       <>
       <Text marginBlock={'3rem'} fontSize={'18px'} fontWeight={'400'}>אבזור בטיחותי</Text>
        <Stack position={'relative'} width={'50%'}  direction={'row-reverse'} justifyContent={'flex-end'} gap={0.4}>
            <Text fontSize={'14px'} color='#cdcdcd' right={0} top={30} position={'absolute'}>רמת בטיחות גבוהה</Text>
            <Text fontSize={'14px'} color='#cdcdcd' left={0} top={30} position={'absolute'}>רמת בטיחות נמוכה</Text>
            {SAFTEY_RANK.map((val,key) => (
                    <Box key={key} position={'relative'} bgcolor={val.color} display={'flex'}  alignItems={'center'} justifyContent={'center'} width={44} height={26}>
                        <Text fontWeight={'340'} fontSize={'14px'} color='#ffffff'>{val.val}</Text>
                        {val.val === level && 
                          <div style = {{backgroundColor:'inherit',clipPath : "polygon(2.47419px 4.50758px,2.47419px 4.50758px,2.0194374408px 4.56137156px,1.6193083584px 4.71512168px,1.2806427456px 4.95234452px,1.0102805952px 5.25655424px,.8150619px 5.611265px,.7018266528px 5.99999096px,.6774148464px 6.40624628px,.7486664736px 6.81354512px,.9224215272px 7.20540164px,1.20552px 7.56533px,6.59351px 12.9283px,6.59351px 12.9283px,6.85570116px 13.1321896px,7.14541168px 13.2905128px,7.45571612px 13.4032912px,7.77968904px 13.4705464px,8.110405px 13.4923px,8.44093856px 13.4685736px,8.76436428px 13.3993888px,9.07375672px 13.2847672px,9.36219044px 13.1247304px,9.62274px 12.9193px,14.8147px 7.58381px,14.8147px 7.58381px,15.0893017px 7.22383499px,15.2566216px 6.83375912px,15.3233719px 6.42955613px,15.2962648px 6.02719976px,15.1820125px 5.64266375px,14.9873272px 5.29192184px,14.7189211px 4.99094777px,14.3835064px 4.75571528px,13.9877953px 4.60219811px,13.5385px 4.54637px,2.47419px 4.50758px)",width : '20px',height:'20px',borderRadius : '20px',position : 'absolute',top: '-16px',left : '30%'}}></div>
                    }
                    </Box>
            ))}
        </Stack>
       </>
    )
}
const Pollution = ({level} : {level : number}) => {
    return (
       <>
       <Text marginBlock={'3rem'} fontSize={'18px'} fontWeight={'400'}>זיהום אוויר</Text>
        <Stack width={'60%'} position={'relative'} direction={'row-reverse'} justifyContent={'flex-end'} gap={0.4}>
            <Text fontSize={'14px'} color='#cdcdcd' right={0} top={30} position={'absolute'}>זיהום מרבי</Text>
            <Text fontSize={'14px'} color='#cdcdcd' left={0} top={30} position={'absolute'}>זיהום מזערי</Text>
            {POLLUTION_RANK.map((val,key) => (
                    <Box key={key} position={'relative'} bgcolor={val.color} display={'flex'} alignItems={'center'} justifyContent={'center'} width={28} height={28}>
                        <Text color='#ffffff' fontSize={'14px'} >{val.val}</Text>
                        {val.val === level &&  
                         <div style = {{backgroundColor:'inherit',clipPath : "polygon(2.47419px 4.50758px,2.47419px 4.50758px,2.0194374408px 4.56137156px,1.6193083584px 4.71512168px,1.2806427456px 4.95234452px,1.0102805952px 5.25655424px,.8150619px 5.611265px,.7018266528px 5.99999096px,.6774148464px 6.40624628px,.7486664736px 6.81354512px,.9224215272px 7.20540164px,1.20552px 7.56533px,6.59351px 12.9283px,6.59351px 12.9283px,6.85570116px 13.1321896px,7.14541168px 13.2905128px,7.45571612px 13.4032912px,7.77968904px 13.4705464px,8.110405px 13.4923px,8.44093856px 13.4685736px,8.76436428px 13.3993888px,9.07375672px 13.2847672px,9.36219044px 13.1247304px,9.62274px 12.9193px,14.8147px 7.58381px,14.8147px 7.58381px,15.0893017px 7.22383499px,15.2566216px 6.83375912px,15.3233719px 6.42955613px,15.2962648px 6.02719976px,15.1820125px 5.64266375px,14.9873272px 5.29192184px,14.7189211px 4.99094777px,14.3835064px 4.75571528px,13.9877953px 4.60219811px,13.5385px 4.54637px,2.47419px 4.50758px)",width : '20px',height:'20px',borderRadius : '20px',position : 'absolute',top: '-16px',left:'20%'}}></div>
                    }
                    </Box>
            ))}
        </Stack>
       </>
    )
}

const SafteyAndPollution = () => {
  return (
    <Box position={'relative'} pb={'4rem'}>
        <Text fontWeight={'500'} fontSize={'18px'}>רמת בטיחות וזיהום</Text>
        <SafteyAccessories level={6}/>
        <Pollution level={10}/>
        <Divider sx = {{marginTop : '4rem'}}/>
    </Box>
  )
}

export default SafteyAndPollution