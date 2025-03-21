import RealestateHeader from './RealestateHeader/RealestateHeader'
import { Box, Grid2 as Grid, Stack } from '@mui/material'
import { CardWithImage, Image, Text } from '../../components'
import comm_1 from '../../assets/realestate/comm_1.png'
import comm_2 from '../../assets/realestate/comm_2.png'
import home1 from '../../assets/realestate/yad_1/home1.png'

const RealestatePage = () => {
  return (
    <>
    <RealestateHeader/>
    <Grid  container >
        {/* relestate list */}
        <Grid p={2}  size = {4}>
            <Image height={'140px'} src={comm_1} />
            <Text fontSize={'24px'} fontWeight={'500'}>נדל״ן למכירה</Text>
            
            {/* yad1 */}
           <Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Text>פרויקטים חדשים</Text>
                    <Text>לכל הפרויקטים</Text>
                </Box>
               <Stack direction={'row'} gap={2}>
                {[1,2,3].map((item,key) => (
                        <CardWithImage sx = {{width : '12rem'}}   imgSrc = {home1}></CardWithImage>
                    ))}
               </Stack>
           </Box>

           {/* list */}
           <Box marginBlock={'2rem'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Text>78,034 תוצאות</Text>
                <Box>
                    <Text>מיון לפי</Text>
                </Box>
            </Box>
           </Box>




        </Grid>
        {/* map */}
        <Grid bgcolor={'lightblue'} size = {7.3}>
        <Text>asd</Text>
        </Grid>
        {/* commercial */}
        <Grid container alignItems={'center'} justifyContent={'center'} size = {0.7}>
                <Image width={'80%'} height={'80%'} src={comm_2}/>
        </Grid>
    </Grid>
    </>
  )
}

export default RealestatePage