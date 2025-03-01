import { Box, Button, Menu, MenuItem, useTheme } from "@mui/material";
import  { useCallback, useRef, useState } from "react";
import Image from "../Image/Image";
import yad2_logo from '../../assets/yad2_logo.png'
import Text from "../Text/Text";
export type TMenuItem = {
  title: string;
  pathname?: string;
  subMenus?: TMenuItem[];
};

export const MENU_ITEMS: TMenuItem[] = [
  {
    title: "Home",
    pathname: "/"
  },

  {
    title: "about",
    pathname: "/about",
    subMenus: [
      {
        title: "a",
        pathname: "/about/a"
      },
      {
        title: "b",
        pathname: "/about/b"
      }
    ]
  }
];

const DropdownMenuItem = ({
  menuItem,
  menuShowingDropdown,
  setMenuShowingDropdown
}: {
  menuItem: TMenuItem;
  menuShowingDropdown: string;
  setMenuShowingDropdown: (menuTitle: string) => void;
}) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(menuItem.title);
  }, [menuItem.title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => {
    return (
      <MenuItem
        onClick={() => {
          console.log("second level menu tiem click");
        }}
        key={subMenuItem.title}
      >
        {subMenuItem.title}
      </MenuItem>
    );
  });

  const theme = useTheme();

  return (
    <>
      <Button
      sx={{ '&.MuiButton-root:hover':{bgcolor: "rgba(185, 185, 185, 0.33)",borderRadius : 0},zIndex: theme.zIndex.modal + 1,marginInline : '0.3rem',height : '100%'  }}
        id={`menuItem-${title}`}
        // higher zIndex to make button show submenu when move mouse from another submenu
       
        ref={buttonRef}
        onClick={() => {
          if (!menuItem.subMenus) {
            console.log("first level menu click");
          }
        }}
        onMouseLeave={() => {
          setMenuShowingDropdown("");
        }}
        onMouseEnter={() => {
          if (menuItem.subMenus) {
            showSubMenu();
            return;
          }
        }}
      >
        <Text>
        {title} 
        </Text>
       
      </Button>
      <Menu
        transitionDuration={0}
        slotProps={{
          paper : 
          { onMouseEnter :() => {
          showSubMenu();
          },
          onMouseLeave :() => {
          closeSubMenu();
          }}
        }
        }
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === menuItem.title}
        onClose={closeSubMenu}
      >
        {subMenusNodes}
      </Menu>
    </>
  );
};

 const TopMenu = () => {
  const [menuShowingDropdown, setMenuShowingDropdown] = useState("");

  const handleMenuShowingDropdownChange = useCallback((menuTitle: string) => {
    setMenuShowingDropdown(menuTitle);
  }, []);


  //MENU ITEMS
  const menuItems = MENU_ITEMS.map((menuItem) => {
    return (
      <>
       <DropdownMenuItem
        key={menuItem.title}
        menuItem={menuItem}
        menuShowingDropdown={menuShowingDropdown}
        setMenuShowingDropdown={handleMenuShowingDropdownChange}
      />
      
      </>
      
    );
  });

  // THE WHOLE MENU
  return (
          <Box sx = {{backgroundColor : '#ffffff90',display : 'flex',justifyContent : 'space-between',paddingInline : '1rem',height : '65px',boxShadow: '0px 4px 7px rgba(0,0,0,0.07)' }}>
           <Box sx = {{display : 'flex',flex : 1}}>
            {menuItems}
           </Box>
           <Box sx = {{display : 'flex',flexDirection : 'row-reverse',flex : 1,justifyContent : 'stretch',alignItems : 'center'}}>
           <Image src={yad2_logo}/>
            {menuItems}
          
           </Box>
          </Box>
  )
};

export default TopMenu
