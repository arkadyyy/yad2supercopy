import { Popover } from '@mui/material'
import { styled } from '@mui/material/styles'

type PopoverProps = {
    open : any,
    id : any,
    children : any
}


const CustomPopover = styled(Popover)({

     "&::before": {
            backgroundColor : 'red'
            
          },
      

}) as typeof Popover
const PopoverComponent = ({open,id,children} : PopoverProps) => {
  
  return (
    <CustomPopover
    
        open = {open}
        id = {id}
        disableRestoreFocus
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}  sx={{ pointerEvents: 'none' }}  >
            {children}
    </CustomPopover>
  )
}

export default PopoverComponent