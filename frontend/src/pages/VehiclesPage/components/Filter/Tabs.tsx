import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from '@mui/material';

import Cars_icon from '../../../../assets/vehicles/navigation/cars.svg?react'
import Motorcycles_icon from '../../../../assets/vehicles/navigation/motorcycles.svg?react'
import Scooters_icon from '../../../../assets/vehicles/navigation/scooters.svg?react'
import Trucks_icon from '../../../../assets/vehicles/navigation/trucks.svg?react'
import Watercraft_icon from '../../../../assets/vehicles/navigation/watercraft.svg?react'
import Other_icon from '../../../../assets/vehicles/navigation/other.svg?react'

const PAGES = [
    {name : 'פרטיים ומסחריים',pathname : '/vehicles/cars',icon : <Cars_icon/>},
    {name : 'אופנועים',pathname : '/vehicles/motorcycles',icon :<Motorcycles_icon/>},
    {name : 'קטנועים',pathname : '/vehicles/scooters',icon : <Scooters_icon/>},
    {name : 'משאיות',pathname : '/vehicles/trucks',icon : <Trucks_icon/>},
    {name : 'כלי שייט',pathname : '/vehicles/watercraft',icon :<Watercraft_icon/>},
    {name : 'מיוחדים',pathname : '/vehicles/other',icon :<Other_icon/>},
]


function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  icon? : any;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {

  

  return (
    <Tab
    sx ={{minHeight : '3rem',display : 'flex' , "& .MuiTab-icon" : {width : '22px' , height : '22px',left : '10px',position : 'relative'}}}
    iconPosition='start'
    icon={
    props.icon
    }
    
      disableRipple
      component="a"
      
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
     
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
      
      TabIndicatorProps={{style : {transition : 'none',backgroundColor : '#F26632'}}}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        {PAGES.map((page) => (
             <LinkTab label={page.name} href={page.pathname} icon = {page.icon}  />
        ))}
      </Tabs>
      <Divider/>
      
    </Box>
  );
}