import { Container, Divider, Grid2 as Grid } from '@mui/material'
import { Gallery, Image } from '../../components'
import img1 from '../../assets/vehicles/cars/car2/img1.png'
import img2 from '../../assets/vehicles/cars/car2/img2.png'
import img3 from '../../assets/vehicles/cars/car2/img3.png'
import viehcle_comm_2 from '../../assets/vehicles/viehcle_comm_2.png'
import viehcle_comm_1 from '../../assets/vehicles/viehcle_comm_1.png'
import {BasicData,Dealership,MoreDetails,UsersIntrested,SimilarModels,Accessories,SafteyAndPollution,TechinicalData,Header,Description,Rating,PriceSection,Location} from './components'

const VehiclePage = () => {
  return (
  <Container>
    {/* image grid */}
    <Gallery imgs = {[img1,img2,img3]}/>
    <Grid mb={'4rem'} container spacing={2} mt={'2rem'}>
      {/* data */}
      <Grid size={8}>
        <Header/>
        <BasicData/>
        <Location value = {'אשדוד'}/>
        <Description text = 'כחדשה יד שניה ללא תאונות ,שנת 2021 מנוע סולר .'/>
        <Dealership/>
        <MoreDetails/>
        
        {/* comm 2 */}
        <Image height={'200px'} src={viehcle_comm_1}/>
        <Divider/>
        {/* rating */}
        <Rating/>
        <Divider/>
        {/* people were intrested also in ... */}
        <UsersIntrested/>
        {/* simmilar models */}
        <SimilarModels/>
        <Accessories/>
        <SafteyAndPollution/>
        <TechinicalData/>
      
      </Grid>
      {/* end data */}

      {/* price */}
      <Grid size={4}>
        <PriceSection/>
      </Grid>
    </Grid>
     {/* end page commercial */}
     <Image height={'100%'} width={'100%'} src={viehcle_comm_2} />
  </Container>
  )
}

export default VehiclePage