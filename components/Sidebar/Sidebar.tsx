import * as React from 'react';
import { useRouter } from "next/router";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {sidebardata} from '../../utils/SidebarData';
import Link from 'next/link';


const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }
  
export default function Sidebar(props:any, data:Props){

    const { window } = data;
    const router = useRouter();

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h4" noWrap component="div" sx={{fontWeight:800}}>
            <Link href="/">Mujiba</Link>
        </Typography>
      </Toolbar>
      {sidebardata.map((group:any)=>
      <Box key={group.key}>
        <Divider />
        <List>
            {group.data.map((item:any)=>
                <ListItem 
                    key={item.key} 
                    disablePadding                       
                    className={(router.query.flag !== item.key ? "opacity-75" : "selected")}>
                    <ListItemButton onClick={()=>router.push("/admin/dashboard/"+item.key)}>
                        <ListItemIcon sx={{color:"inherit"}}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            )}     
        </List>
      </Box>
      )}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return(
        <>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={props.mobileopen}
                onClose={props.mobilecontrol}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
        </>
    )
}
