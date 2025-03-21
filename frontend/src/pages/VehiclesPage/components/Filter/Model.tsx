import { Button, Image, Menu, Text } from '../../../../components';
import { Box, Chip, Divider, List, ListItem, ListItemText, OutlinedInput } from '@mui/material';
import tick from '../../../../assets/orange_tick.svg'
import CloseIcon from '@mui/icons-material/Close';

const Model = () => {
  return (
    <Menu menuBtnText = 'דגם'>
    <Box display={'flex'} flexDirection={'column'} padding={'1rem'} width={'320px'}>
            <OutlinedInput size='small'/>
            <Text color='grey' fontWeight={'500'} fontSize={'14px'} paddingTop={'0.6rem'}>ניתן לבחור עד 10 דגמים</Text>
                 {/* chips  */}
                 <Box  paddingBlock={'0.4rem'} display={'flex'} flexWrap={'wrap'}>
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
                <Chip sx = {{ marginLeft : '0.2rem', "& .MuiChip-deleteIcon" : {position : 'relative',left :'10px',":hover" : {backgroundColor : '#80808053',borderRadius : '50%'}},"& .MuiChip-label" : {paddingRight : '8px'}}} deleteIcon={<CloseIcon sx = {{width : '0.9em',height : '0.9em'}} />}  label="אאודי" onDelete={()=> alert('adasd')} />
        
            </Box>
            <Divider/>
       
            <List dense sx={{ width: '100%',maxHeight : 300,overflow : 'auto'}}>
                {Array.from({length : 40},(_,i) => i+1).map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                <ListItem
                    sx = {{ ":hover" : {backgroundColor : '#9c9c9c1c'} ,cursor : 'pointer',paddingBlock : '0.6rem',marginTop : '0.4rem',"& .MuiListItemSecondaryAction-root" : {width  :'31em',height : '1em'}}}
                    key={value}
                    secondaryAction={
                    <Image sx = {{}} src = {tick}/>
                    }
                    disablePadding
                >
                    <Box display={'flex'}>
                        <ListItemText sx = {{marginRight : '1rem'}} id={labelId} primary={`Line item ${value + 1}`} />
                    </Box>
                </ListItem>
                );
                })}
            </List>
        </Box>
        <Divider/>
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'} paddingInline={'1rem'}>
                <Button borderNone fontWeight={'400'} >איפוס</Button>
                <Button borderNone color='primary' fontWeight={'500'}>אישור</Button>
           </Box>
    </Menu>
  )
}

export default Model