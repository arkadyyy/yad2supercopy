import { Image, Text,Select } from "../../components"
import img from '../../assets/vehicles/vehicle_page.png'
import side_comm1 from '../../assets/vehicles/side_comm_1.png'
import side_comm2 from '../../assets/vehicles/side_comm_2.png'
import { Container,Box,Grid2 as Grid, Divider } from "@mui/material"

import { DATA,SELECT_VALUES } from './data'

import {CardCommercial,ListCard,Dealerships,Filter} from './components'

const VehicelsPage = () => {
  return (
   <Box width={'100%'}>
   <Image src={img}/>
    <Container>
      <Filter/>
      {/* data */}
      <Grid  container  gap={1}>
        {/* data list */}
        <Grid height={'200px'} size = {9}>
         <Box alignItems={'center'} justifyContent={'space-between'} display={'flex'}>
            <Box>
              <Text fontWeight={'600'} fontSize={'22px'}>רכבים למכירה</Text>
              <Text>{Number(63636).toLocaleString()} תוצאות </Text>
            </Box>
           <Select text = {'מיון לפי'} values={SELECT_VALUES}/>
         </Box>
          <Dealerships/>
          {/* the list itself */}
          {DATA.map((carData) => (
            <ListCard key={carData.id} carData = {carData}/>
          ))}
        </Grid>
        {/* end data */}
         <Divider orientation="vertical" flexItem/>

        {/* commercials */}
        <Grid container direction={'column'} spacing={4} size = {2.8} >
         <Grid>
          <Image src={side_comm1}/>
         </Grid>
         <Grid>
            <CardCommercial/>
         </Grid>
          <Grid>
            <Image src={side_comm2}/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
   </Box>
  )
}

export default VehicelsPage