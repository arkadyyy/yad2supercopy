// import React from 'react'
import { Card, Image, Text } from "../../components"
import img from '../../assets/vehicles/vehicle_page.png'
import side_comm1 from '../../assets/vehicles/side_comm_1.png'
import side_comm2 from '../../assets/vehicles/side_comm_2.png'
import { Container,Box,Grid2 as Grid, Divider } from "@mui/material"
import Filter from "./Filter/Filter"
import Delearships from "./Dealerships/Delearships"

const CarPage = () => {
  return (
   <Box width={'100%'}>
   <Image src={img}/>
    <Container>
      <Filter/>
      <Grid  container spacing={2}>
        {/* data */}
        <Grid height={'200px'} size = {9}>
         <Box alignItems={'center'} justifyContent={'space-between'} display={'flex'}>
            <Box>
              <Text fontWeight={'600'} fontSize={'22px'}>רכבים למכירה</Text>
              <Text>63,636 תוצאות </Text>
            </Box>
            <Box>
              <Text>מיון לפי</Text>
              <Text>תאריך </Text>
            </Box>
         </Box>
          <Delearships/>
        </Grid>
    
        {/* commercials */}
        <Grid  size = {3} gap={4}>
         <Grid>
          <Image width={'80%'} height={'30%'} src={side_comm1}/>
         </Grid>
         <Grid>
          <Card sx = {{height : '200px'}} variant="outlined">
              <h2>asd</h2>
            </Card>
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

export default CarPage