import { Box} from '@mui/material'
import { Text, ManualCarousel} from '../../../components'
import img1 from '../../../assets/recommended/img1.png'
import img2 from '../../../assets/recommended/img2.png'
import img3 from '../../../assets/recommended/img3.png'

const DATA = [
    {price : '₪41,900',text : 'איסוו די-מקס',subtext : '2011',img : img1},
    {price : '₪12,900',text : 'ניסאן קשקאי',subtext : '2008',img : img2},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},
    {price : 'לא צויין מחיר',text : 'סיאט אקטה',subtext : '2019',img : img3},

]

const Recommended = () => {
  return (
    <Box marginTop={'3rem'}>
        {/* /header */}
        <Box marginBlock={'1rem'} display={'flex'}  alignItems={'center'}>
            <Text fontWeight={'400'} fontSize={'25px'}>מומלץ עבורך</Text>
        </Box>

        {/* carousel */}
        <ManualCarousel data = {DATA}/>
    </Box>
  )
}

export default Recommended