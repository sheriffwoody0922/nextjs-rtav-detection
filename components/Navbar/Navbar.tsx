import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';


const drawerWidth = 240;


export default function Navbar(props:any){

    return(
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{display:"flex"}} className="admin-navbar">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.mobilecontrol}
                    sx={{display: { sm: 'none' }}}
                >
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}