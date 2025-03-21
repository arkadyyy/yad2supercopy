import React from 'react'
import { Menu, Text } from '../../../../components';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Year = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };


  return (
    <Menu menuBtnText = 'שנה'>
    <Box  borderRadius={'8px'} width={'330px'} padding={'1rem'}>
     <Text fontWeight={'500'} color='grey' fontSize={'14px'} >ניתן לבחור טווח שנים</Text>
     <Box display={'flex'} alignItems={'center'}>
     <FormControl sx={{ m: 1, minWidth: 120 }}>
         
         <Select
        
                 IconComponent={(props) => <ExpandMoreIcon fontSize='0.4px' {...props} color='disabled'/>}
         
         value={age}
         onChange={handleChange}
         displayEmpty
         renderValue={(value: unknown) => {
             if (!value) {
               return <Text position={'absolute'} right={'10px'} color="lightgrey">מ-</Text>;
             }
             return <>{value}</>;
           }}
         size={'small'}
         label = {'מ-'}
         // inputProps={{ 'aria-label': 'Without label' }}
         sx={{
             border  :'1px solid lightgrey',
             position : 'relative',
             // backgroundColor: "red",
            
             "& .MuiSvgIcon-root": {
               right: "unset",
               left: "6px",
               display : 'flex',
               flexDirection : 'row-reverse'
             },
             borderRadius: '4px',
             cursor : 'pointer',
             "& .MuiOutlinedInput-notchedOutline": {
               border: 0
             },
             "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
               border: "none"
             }
           }}
         
         >
             {/* <MenuItem sx = {{position : 'relative'}} value="">
             <em style={{right: '10px',position : 'absolute'}}>מ-</em>
         </MenuItem> */}
          <MenuItem value={0}><Text>הכל</Text></MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
         </Select>
     </FormControl>
     <Text fontWeight={'400'} fontSize={'22px'}>-</Text>
     <FormControl sx={{ m: 1, minWidth: 120 }}>
             
         <Select
           IconComponent={(props) => <ExpandMoreIcon fontSize='0.4px' {...props} color='disabled'/>}
         sx={{
             border  :'1px solid lightgrey',
              position : 'relative',
       "& .MuiSvgIcon-root": {
               right: "unset",
               left: "6px",
               display : 'flex',
               flexDirection : 'row-reverse'
             },
             borderRadius: '4px',
             cursor : 'pointer',
             "& .MuiOutlinedInput-notchedOutline": {
               border: 0
             },
             "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
               border: "none"
             }
           }}
         value={age}
         onChange={handleChange}
         displayEmpty
         renderValue={(value: unknown) => {
             if (!value) {
               return <Text position={'absolute'} right={'10px'} color="lightgrey">עד-</Text>;
             }
             return <>{value}</>;
           }}
         labelId='to#'
     
         size={'small'}
         inputProps={{ 'aria-label': 'Without label' }}
         >
         
         <MenuItem value={0}><Text>הכל</Text></MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
         </Select>
     </FormControl>
     </Box>
    </Box>
 </Menu>
  )
}

export default Year