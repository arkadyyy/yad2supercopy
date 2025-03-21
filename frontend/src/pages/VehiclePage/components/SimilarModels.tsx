import { Box } from '@mui/material'
import { Text,ManualCarousel } from '../../../components'
import img from '../../../assets/vehicles/cars/car2/img2.png'

const DATA = [
    {id : 1,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 2,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 3,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 4,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 5,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 6,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 7,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 8,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
    {id : 9,img : img , price : '50000',model : 'סיטרואן C5 איירקרוס',year : '2020',hand : '1'},
]

const SimilarModels = () => {
  return (
    <Box marginTop={'1rem'}>
        <Text fontSize={'20px'} fontWeight={'500'} marginBlock={'1rem'}>דגמים דומים למה שחיפשת</Text>
        <ManualCarousel data = {DATA}/>
    </Box>
  )
}

export default SimilarModels