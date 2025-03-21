import { Box, FormControl, ListItemText, MenuItem ,Select} from '@mui/material'
import {Text} from '..'
import React from 'react'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomSelect = styled(Select)({
    border  :'none',
    position : 'relative',
    width : '100%',
    padding : '0 !important',
    borderRadius: '4px',
    cursor : 'pointer',

    
    
})

type PropTypes = {text : string,values : string[]} & React.ComponentProps<typeof Select>



const SelectComponent = (props : PropTypes) => {
    const {text,values} = props
  return (
    <Box display={'flex'} alignItems={'center'}>
    <Text color="lightgray">{text}</Text>

    <FormControl sx={{ m: 1, minWidth: 10 }}>
              
        <CustomSelect
            IconComponent={(props) => <ExpandMoreIcon {...props}/>}
            defaultValue="0"
            labelId='to#'
            value={"0"}
            size={'small'}
            inputProps={{ 'aria-label': 'Without label' }}
              >
              {
               values.map((val,key) => (
                  <MenuItem disableRipple key={key} value={key}>
                    <ListItemText>
                     <Text>{val}</Text>
                    </ListItemText>

                    {/* if selected , display tick */}
                   {/* {true &&  <ListItemIcon  sx = {{position : 'relative',right : '22px'}} >
                      <Image width={'15px'} height={'15px'} src={tick}/>
                    </ListItemIcon>} */}
                  </MenuItem>
                ))
              }
             
              </CustomSelect>
          </FormControl>
  </Box>
  )
}

export default SelectComponent