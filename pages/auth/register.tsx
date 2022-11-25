import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

import Auth from "../../layouts/Auth";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


interface ErrorTypes{
    name: string,
    email: string,
    password: string
}

export default function Register(){

    const router = useRouter()
    const [user, setUser] = React.useState({name:"",email:"",password:""})
    const [errors, setErrors] = React.useState({name:null, email:null, password:null});
    const [fetching, setFetching] = React.useState(false);

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        setFetching(true);
        axios
        .post("/api/auth/register", user)
        .then((res) => {
          toast.success("Registeration Successfule");
          router.push("/auth/login");
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            setErrors(err.response.data);
          } else toast.error("Somathing Bad Happened");
        })
        .finally(() => {
          setFetching(false);
        });
    }

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
            <TextField 
                className="logininput" 
                id="user-name" 
                label="User Name" 
                variant="filled" 
                disabled={fetching} 
                value={user.name} 
                onChange={(e) => {setUser({ ...user, name: e.target.value })}}
            />
            <div className="w-100 text-sm md:text-base text-red-500 font-semibold">{errors.name}</div>
            <TextField 
                className="logininput" 
                id="user-email" 
                label="Email"  
                variant="filled" 
                disabled={fetching} 
                value={user.email}
                onChange={(e) => {setUser({ ...user, email: e.target.value })}}
            />
            <div className="w-100 text-sm md:text-base text-red-500 font-semibold">{errors.email}</div>
            <TextField 
                className="logininput" 
                id="user-password" 
                label="Password" 
                type="password" 
                variant="filled" 
                disabled={fetching} 
                value={user.password}
                onChange={(e) => {setUser({ ...user, password: e.target.value })}}
            />
            <div className="w-100 text-sm md:text-base text-red-500 font-semibold">{errors.password}</div>
            <Button 
                className="loginbutton" 
                onClick={(e)=>handleSubmit(e)} 
                variant="contained" 
                endIcon={<AppRegistrationIcon />} 
                disabled={fetching}>
                Register
            </Button>
            <p className="text-black">
            Already have an account? {" "}
                <Link href="/auth/login" className="text-orange-700">
                    Login
                </Link>
            </p>
            </Box>
        </Auth>
    )
}