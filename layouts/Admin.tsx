import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { useRouter } from "next/router";

import Box from '@mui/material/Box';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Toolbar from '@mui/material/Toolbar';



export default function Admin({children, layoutData}:InferProps<typeof Admin.propTypes>){

    const router = useRouter();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    React.useEffect(() => {
        if (!layoutData.user) router.push("/auth/login");
    }, []);

    return(
        <>
            <Box sx={{ display: 'flex' }}>
                <Navbar mobilecontrol={handleDrawerToggle}/>
                <Sidebar mobilecontrol={handleDrawerToggle} mobileopen={mobileOpen}></Sidebar>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
                >
                    <Toolbar/>
                    {children}
                </Box>
            </Box>
        </>
    )
}

Admin.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    layoutData: PropTypes.any.isRequired,
}