import { Box, Container } from '@mui/material'
import { Carousel, Header, Image } from './components'
import round_buttons_img from './assets/round_buttons'
import {RoundButton} from './components'
import commercial_1 from './assets/commercial/commercial_1.png'
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
function App() {

  return (
    <div style = {{backgroundColor : '#ffffff',minHeight :'700vh'}}>
    <Header/>
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
    </Container>
    </div>
  )
}

export default App
