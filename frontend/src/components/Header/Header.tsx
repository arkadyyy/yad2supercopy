import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {Button,Image} from '../../components'
import yad2_logo from '../../assets/yad2_logo.png'
import { Menu } from '@mui/material';

const pages = ['נדל"ן' ,'רכב' ,'יד שנייה','דרושים IL'];
const leftActions = ['צ׳אט','מודעות שאהבתי','התחברות'];

const CustomAppBar = styled(AppBar)({
    backgroundColor : '#ffffff',
    boxShadow : '7px 7px 7px rgba(0,0,0,0.05)',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'stretch',
    paddingInline : '1rem',
    minHeight : '75px'
    
}) as typeof AppBar

function Header() {



  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu")!.children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  return (
    <CustomAppBar  position="static">
          <Box flex={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {leftActions.map((page) => (
              <Button
                key={page}
              >
               {page}
              </Button>
            ))}
          </Box>
          <Box flex={2.5} sx={{  display: { xs: 'none', md: 'flex' },flexDirection : 'row-reverse'}}>
            <Image src={yad2_logo} height='40px' width='70px'/>
                {pages.map((page) => (
                    <Button
                      key={page}
                      id="menubutton1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
                    >
                    {page}
                    </Button>
                  ))}

<Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
          </Box>
    </CustomAppBar>
  );
}
export default Header;