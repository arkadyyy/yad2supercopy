import { Box, Container, IconButton } from '@mui/material'
import { Card, Carousel,  Image, Text } from '../.././components'
import round_buttons_img from '../../assets/round_buttons'
import {RoundButton} from '../../components'
import commercial_1 from '../../assets/commercial/commercial_1.png'
import { Close } from '@mui/icons-material'
const roundBtnData = [
  {
    title : 'נדל״ן',
    img : round_buttons_img.realestate_img
  },
  {
    title : 'רכב',
    img : round_buttons_img.car_img
  },
  {
    title : 'יד שנייה',
    img : round_buttons_img.sofa_img
  },
  {
    title : 'דרושים',
    img : round_buttons_img.suitcase_img
  },
  {
    title : 'חיות מחמד',
    img : round_buttons_img.pet_img
  },
  {
    title : 'בעלי מקצוע',
    img : round_buttons_img.drill_img
  },
  {
    title : 'עסקים למכירה',
    img : round_buttons_img.coffee_machine_img
  }
]
function HomePage() {

  return (
    <div style = {{height : '100%'}}>
    <Container maxWidth = 'lg'>
      <Carousel/>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={'3rem'}>
          {roundBtnData.reverse().map((btn) => (
          <RoundButton title={btn.title} img={btn.img}/>
        ))}
        </Box>
        <Box 
            display={'flex'} alignItems={ 'center' } justifyContent={'center'} height={'20rem'}>
          <Image src={commercial_1} width='80%' height='100%' />
        </Box>

        {/* last search section */}
        <Box sx = {{backgroundColor : '#EBEBEB',padding : '1rem',minHeight : '13rem',borderRadius : '8px'}} display={'flex'} justifyContent={'space-between'} paddingInline={'0.5rem'} alignItems={'center'}>
       
            {[1,2,3].map((card) => (
              <Card>
                 <>
                 <IconButton ><Close sx={{width : '16px', height : '16px'}}/></IconButton>
                 <Text>TEST123</Text>
                 <Text>{card}</Text>
                 </>
              </Card>
            ))}

              <Box>
              <Text>חיפושים אחרונים</Text>
              <Text>כל החיפושים</Text>
              </Box>
        </Box>
    </Container>
    </div>
  )
}

export default HomePage
