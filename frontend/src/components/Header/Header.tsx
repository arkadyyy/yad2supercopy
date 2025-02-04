import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {Button} from '../../components'
const pages = ['נדל"ן' ,'רכב' ,'יד שנייה','דרושים IL'];
const leftActions = ['צ׳אט','מודעות שאהבתי','התחברות'];

const CustomAppBar = styled(AppBar)({
    backgroundColor : '#ffffff',
    boxShadow : '7px 7px 7px rgba(0,0,0,0.05)',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingInline : '1rem',
    minHeight : '75px'
    
}) as typeof AppBar

function Header() {

  return (
    <CustomAppBar position="static">
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {leftActions.map((page) => (
              <Button
                key={page}
              >
               {page}
              </Button>
            ))}
          </Box>
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
              <Button
                key={page}
              >
               {page}
              </Button>
            ))}
          </Box>
    </CustomAppBar>
  );
}
export default Header;