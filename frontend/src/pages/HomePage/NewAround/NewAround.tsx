import { Box} from '@mui/material'
import {useState} from 'react'
import { Button, ManualCarousel, Text } from '../../../components'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import img1_0 from '../../../assets/new_around/realestate/img1.png'
import img2_0 from '../../../assets/new_around/realestate/img2.png'
import img1_1 from '../../../assets/new_around/vehicles/img1.png'
import img2_1 from '../../../assets/new_around/vehicles/img2.png'
import img3_1 from '../../../assets/new_around/vehicles/img3.png'
import img1_2 from '../../../assets/new_around/second_hand/img1.png'
import img2_2 from '../../../assets/new_around/second_hand/img2.png'
import img3_2 from '../../../assets/new_around/second_hand/img3.png'

const CATEGORIES = [
    {title : 'נדלן', action : () => console.log('api request to latest realestate') , data : [
        {img : img1_0,price : "₪6,500", text : "ריינס 4 , תלאביב יפו", subtext : "1 חדרים"},
        {img : img2_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
        {img : img2_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
        {img : img2_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
        {img : img2_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
        {img : img2_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
        {img : img1_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
        {img : img1_0,price : "₪13,000,000", text : "שולמית, תל אביב יפו", subtext : "3 חדרים"},
   
    ] },
    {title : 'רכב', action : () => console.log('api request to latest vehicles'),data : [
        {img : img1_1,price : "לא צויין מחיר", text : "לנד רובר ריינג׳ רובר ספורט", subtext : "2025"},
        {img : img2_1,price : "₪30,000", text : "ג׳יפ צ׳ירוקי", subtext : "2006"},
        {img : img3_1,price : "₪49,900", text : "יונדאי טוסון", subtext : "2015"},
        {img : img3_1,price : "₪49,900", text : "יונדאי טוסון", subtext : "2015"},
        {img : img3_1,price : "₪49,900", text : "יונדאי טוסון", subtext : "2015"},
        {img : img3_1,price : "₪49,900", text : "יונדאי טוסון", subtext : "2015"},
        {img : img3_1,price : "₪49,900", text : "יונדאי טוסון", subtext : "2015"},
        {img : img3_1,price : "₪49,900", text : "יונדאי טוסון", subtext : "2015"},
    
    ]
},
    {title : 'יד שנייה', action : () => console.log('api request to latest second hand'),data : [
        {img : img1_2,price : "₪1,200", text : "ROM SDS-MOD 156 ROCKER אול מאונטיין", subtext : "תל אביב יפו"},
        {img : img2_2,price : "₪2,400", text : "Simon anderson XFC 6 , גלשן טיל שורט", subtext : "תל אביב יפו"},
        {img : img3_2,price : "לא צויין מחיר", text : "ציו ד מטבח למכירה במצב טוב ובמחירי מציאה !", subtext : "תל אביב יפו"},
        {img : img3_2,price : "לא צויין מחיר", text : "ציו ד מטבח למכירה במצב טוב ובמחירי מציאה !", subtext : "תל אביב יפו"},
        {img : img3_2,price : "לא צויין מחיר", text : "ציו ד מטבח למכירה במצב טוב ובמחירי מציאה !", subtext : "תל אביב יפו"},
        {img : img3_2,price : "לא צויין מחיר", text : "ציו ד מטבח למכירה במצב טוב ובמחירי מציאה !", subtext : "תל אביב יפו"},
        {img : img3_2,price : "לא צויין מחיר", text : "ציו ד מטבח למכירה במצב טוב ובמחירי מציאה !", subtext : "תל אביב יפו"},
        {img : img3_2,price : "לא צויין מחיר", text : "ציו ד מטבח למכירה במצב טוב ובמחירי מציאה !", subtext : "תל אביב יפו"},
   
    ]},
]


const NewAround = () => {

   const [selectedCategory,setSelectedCategory] = useState(0)

   return (
    <Box marginTop={'3rem'}>
        {/* /header */}
            <Box display={'flex'}  alignItems={'center'}>
                <Text fontWeight={'400'} fontSize={'25px'}>חדש סביבך</Text>
                <Box display={'flex'} marginInline={'0.5rem'} alignItems={'center'}>
                    <LocationOnOutlinedIcon sx={{color : 'orange'}}/>
                    <Text fontSize={'13px'} fontWeight={'500'} color='orange'>מיקום לא זמין</Text>
                </Box>
            </Box>

        {/* buttons under header */}
            <Box marginBlock={'1rem'} display={'flex'} >
                {CATEGORIES.map((category,key) => (
                    <Button sx = {{marginInline : '0.2rem'}} key={category.title+key}>{category.title}</Button>
                ))}
            </Box>
        {/* carousel */}
            <ManualCarousel data = {CATEGORIES[selectedCategory].data}/>
    </Box>
  )
}

export default NewAround