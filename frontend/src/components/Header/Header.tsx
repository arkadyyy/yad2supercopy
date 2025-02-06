import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Button,Image} from '../../components';
import yad2_logo from '../../assets/yad2_logo.png';
import {Text} from '../../components';

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


  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
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
                    <>

                  <Button    
                                      aria-owns={Boolean(anchorEl) ? 'mouse-over-popover' : undefined}
                                      aria-haspopup="true"
                                      onMouseEnter={handlePopoverOpen}
                                      onMouseLeave={handlePopoverClose}     
                                        key={page}
                                      >
                                        {page}
                                      </Button>


                <Popover
                        id="mouse-over-popover"
                        sx={{ pointerEvents: 'none' }}
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Text>I use Popover.</Text>
                      </Popover>
                    </>
                   

                    
                  ))}
                    
          </Box>
    </CustomAppBar>
  );
}
export default Header;