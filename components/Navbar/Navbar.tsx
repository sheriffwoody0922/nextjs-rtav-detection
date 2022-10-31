import React from "react";
import axios from "axios";
import { useRouter } from "next/router";



import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {toast } from "react-toastify";


const drawerWidth = 240;


export default function Navbar(props:any){

    const router = useRouter();

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
                        onClick={(e) => {
                            e.preventDefault();
                            axios.get("/api/auth/logout").then((res) => {
                              toast.success("Logged Out Successfully");
                              router.push("/");
                            });
                        }}
                    >
                        <AccountBoxIcon />
                    </IconButton>
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