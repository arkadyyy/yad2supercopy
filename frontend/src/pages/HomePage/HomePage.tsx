import { Box, Container } from '@mui/material'
import { Carousel,  Image } from '../.././components'
import round_buttons_img from '../../assets/round_buttons'
import {RoundButton} from '../../components'
import commercial_1 from '../../assets/commercial/commercial_1.png'
import commercial_3 from '../../assets/commercial/commercial_3.png'
import LastSearches from './LastSearches/LastSearches'
import NewAround from './NewAround/NewAround'
import Recommended from './Recommended/Recommended'
import PopularServices from './PopularServices/PopularServices'
import CantMiss from './CantMiss/CantMiss'
import NextJob from './NextJob/NextJob'
import Yad2Buisness from './Yad2Buisness/Yad2Buisness'
import MoreOnSite from './MoreOnSite/MoreOnSite'
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
    <Box>
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
            <LastSearches/>
            <NewAround/>
            <Recommended/>
            <Box 
                display={'flex'} alignItems={ 'center' } justifyContent={'center'} height={'20rem'}>
                 <Image src={commercial_3} width='80%' height='100%' />
            </Box>
            <PopularServices/>
            <CantMiss/>
            <NextJob/>
            <Yad2Buisness/>
           
         
            </Container>
            <MoreOnSite/>
      
    </Box>
  )
}

export default HomePage
