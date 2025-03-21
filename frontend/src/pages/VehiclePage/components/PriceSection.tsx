import { Box, Divider } from "@mui/material"
import { Button, Card, Image, Text } from "../../../components"
import commercial1 from '../../../assets/vehicles/side_comm_2.png'

const PriceSection = () => {
  return (
    <Box sx = {{position : 'sticky' , top : '30px'}}>
          <Card disableHoverEffect sx = {{padding : '2rem',cursor : 'auto'}}>
                <Box mb={'1rem'}>
                  <Text fontSize={'28px'} fontWeight={'600'}>לא צויין מחיר</Text>
                  <Box>
                    <Text fontSize={'14px'}>מימון בריבית מופחתת ללקוחות יד2</Text>
                  </Box>
                </Box>
                <Divider/>
                <Box display={'flex'} flexDirection={'column'} mt={'2rem'}>
                  <Button>הצגת מספר טלפון</Button>
                  <Button>שליחת הודעה</Button>
                </Box>
              </Card>
              <Box display={'flex'} justifyContent={'space-between'} mt={'1rem'}>
                <Text fontSize={'14px'}>דווח על מודעה
                73991124</Text>
                <Text fontSize={'14px'}>פורסם ב ‍28/02/25</Text>
              </Box>
            <Box display={'flex'} justifyContent={'center'} mt={'2rem'}>
              <Image   height={'80%'} width={'90%'} src={commercial1}/>
            </Box>
        </Box>
  )
}

export default PriceSection