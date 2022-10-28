import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";


import Auth from "../../layouts/Auth";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputIcon from '@mui/icons-material/Input';



export default function Register(){

    const router = useRouter()
    const { flag } = router.query

    return(
        <Auth>
            <Box
            component="form"
            sx={{
                m: 4, 
                width: '300px',
            }}
            noValidate
            autoComplete="off"
            >
            <TextField className="logininput" id="user-name" label="User Name"  variant="filled" />
            <TextField className="logininput" id="user-email" label="Email"  variant="filled" />
            <TextField className="logininput" id="user-password" label="Password" type="password" variant="filled" />
            <Button className="loginbutton" onClick={()=>router.push('/admin/dashboard/all')} variant="contained" endIcon={<InputIcon />}>
                Register
            </Button>
            <p className="text-white">
            Already have an account? {" "}
                <Link href="/auth/login" className="text-orange-700">
                    Login
                </Link>
            </p>
            </Box>
        </Auth>
    )
}