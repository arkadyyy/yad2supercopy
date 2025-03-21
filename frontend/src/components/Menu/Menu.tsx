import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Text,Button} from '..'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type PropTypes = {
    children : JSX.Element | JSX.Element[],
    menuBtnText : string,
} & React.Component<typeof Menu>
export default function MenuComponent(props : PropTypes) {
  const {menuBtnText} = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx = {{":hover" : {backgroundColor : '#f5f5f5'}}}
        padding={'0.2rem'}
        width={70}
       disableRipple
       endIcon = {open ? <ExpandLessIcon fontSize='small'  color='disabled'/> :<ExpandMoreIcon  fontSize='small' color='disabled'/>}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
       {menuBtnText}
      </Button>
      <Menu
        {...props}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {props.children}
      </Menu>
    </div>
  );
}
