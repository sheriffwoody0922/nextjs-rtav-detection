import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
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
                        edge="start"
                        onClick={(e) => {
                            e.preventDefault();
                            axios.get("/api/test/fakeusers").then((res) => {
                              toast.success(res.data);
                            });
                        }}
                    >
                        <GroupAddIcon></GroupAddIcon>
                    </IconButton>
                    <IconButton  
                        color="inherit" 
                        edge="start"
                        onClick={(e) => {
                            e.preventDefault();
                            axios.get("/api/test/fakecars").then((res) => {
                              toast.success(res.data);
                            });
                        }}
                    >
                        <DirectionsCarIcon></DirectionsCarIcon>
                    </IconButton>
                    <IconButton  
                        color="inherit" 
                        edge="start"
                        onClick={(e) => {
                            e.preventDefault();
                            axios.get("/api/test/fakereports").then((res) => {
                              toast.success(res.data);
                            });
                        }}
                    >
                        <ReportProblemIcon></ReportProblemIcon>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="log out"
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