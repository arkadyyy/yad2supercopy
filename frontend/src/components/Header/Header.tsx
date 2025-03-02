import { Box, Button, Menu, MenuItem, useTheme } from "@mui/material";
import  { useCallback, useRef, useState } from "react";
import Image from "../Image/Image";
import yad2_logo from '../../assets/yad2_logo.png'
import Text from "../Text/Text";
import { useNavigate } from "react-router";
export type TMenuItem = {
  title: string;
  pathname?: string;
  subMenus?: TMenuItem[];
  icon? : string,
  subMenusServices? : TMenuItem[]
};

 const LEFT_MENU_ITEMS : TMenuItem[] = [

]

 const RIGHT_MENU_ITEMS: TMenuItem[] = [
  {
    title: "נדל״ן",
    pathname: "/realestate",
    subMenus : [
      {title : "דירות למכירה",pathname : '/'},
      {title : "דירות להשכרה",pathname : '/'},
      {title : "נדלן מסחרי",pathname : '/'},
      {title : "עסקים למכירה",pathname : '/'},
    
    ],
    subMenusServices : [
      {title : "יד2 דירות חדשות",pathname : '/',icon : ''},
      {title : "כונס נכסים",pathname : '/',icon : ''},
      {title : "הערכת שווי נכס",pathname : '/',icon : ''},
      {title : "משרדי תיווך בישראל",pathname : '/',icon : ''},
      {title : "ייעוץ משכנתאות",pathname : '/',icon : ''},
    ]
  },

  {
    title: "רכב",
    pathname: "/vehicles/cars",
    subMenus: [
      {title : "פרטים ומסחריים",pathname : '/'},
      {title : "אופנועים",pathname : '/'},
      {title : "קטנועים",pathname : '/'},
      {title : "מיוחדים",pathname : '/'},
      {title : "אביזרים",pathname : '/'},
      {title : "משאיות",pathname : '/'},
      {title : "כלי שייט",pathname : '/'},
    ],
    subMenusServices : [
      {title : "מחירון רכב",pathname : '/',icon : ''},
      {title : "מימון רכב",pathname : '/',icon : ''},
      {title : "רכב מכונס נכסים",pathname : '/',icon : ''},
    ]
  },
  {
    title: "יד שנייה",
    pathname: "/second-hand",
    subMenus: [
      {title : "כל המוצרים",pathname : '/'},
      {title : "מוצרי חשמל",pathname : '/'},
      {title : "ריהוט",pathname : '/'},
      {title : "ספורט",pathname : '/'},
      {title : "סלולרי",pathname : '/'},
      {title : "לתינוק ולרכב",pathname : '/'},
      {title : "הכל בחינם",pathname : '/'},
      {title : "קונסולות",pathname : '/'},
    ],
    subMenusServices : [
      {title : "מחירון רכב",pathname : '/',icon : ''},
      {title : "מימון רכב",pathname : '/',icon : ''},
      {title : "רכב מכונס נכסים",pathname : '/',icon : ''},
    ]
  }
];

const DropdownMenuItem = ({
  menuItem,
  menuShowingDropdown,
  setMenuShowingDropdown,
  onClick
}: {
  menuItem: TMenuItem;
  menuShowingDropdown: string;
  setMenuShowingDropdown: (menuTitle: string) => void;
  onClick : () => void
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

        key={subMenuItem.title}
        sx = {{alignItems : 'center',marginBottom : '0.4rem',display : 'flex',justifyContent : 'flex-end' ,"&:hover" : {backgroundColor : 'transparent'}}}
      >
       <Text sx = {{"&:hover" : {color : 'orange'}}}> {subMenuItem.title}</Text>
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
        onClick={onClick}
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
          },
          sx : {padding : '0.4rem'}
        }
        }
        }
        anchorEl={buttonRef.current}
        // open={true}
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
  const navigate = useNavigate()

  const handleMenuShowingDropdownChange = useCallback((menuTitle: string) => {
    setMenuShowingDropdown(menuTitle);
  }, []);


  //RIGHT MENU ITEMS
  const rightMenuItems = RIGHT_MENU_ITEMS.map((menuItem) => {
    return (
      <>
       <DropdownMenuItem
        onClick = {() => navigate(menuItem.pathname!)}
        key={menuItem.title}
        menuItem={menuItem}
        menuShowingDropdown={menuShowingDropdown}
        setMenuShowingDropdown={handleMenuShowingDropdownChange}
      />
      
      </>
      
    );
  });

  //LEFT MENU ITEMS

  const leftMenuItems = LEFT_MENU_ITEMS.map((menuItem) => {
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
          <Box sx = {{backgroundColor : '#ffffff90',display : 'flex',paddingInline : '1rem',height : '65px',boxShadow: '0px 4px 7px rgba(0,0,0,0.07)' }}>
            {/* right side header */}
           <Box sx = {{display : 'flex',flex : 1,alignItems : 'center',marginInline : '0.4rem'}}>
           <Image onClick={() => navigate('/') }  width={'4.5rem'} height={'4.5rem'} src={yad2_logo} sx ={{cursor : 'pointer'}}/>
            {rightMenuItems}
           </Box>

             {/* left side header */}
             <Box sx = {{display : 'flex',flex : 1}}>
            {leftMenuItems}
           </Box>

          </Box>
  )
};

export default TopMenu
