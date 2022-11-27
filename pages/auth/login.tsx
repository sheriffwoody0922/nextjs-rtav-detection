import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import axios from "axios";
import {toast } from "react-toastify";


import Auth from "../../layouts/Auth";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputIcon from '@mui/icons-material/Input';



export default function Login(){

    const router = useRouter()

    const [user, setUser] = React.useState({
        email: "",
        password: "",
      });
     
      const [fetching, setFetching] = React.useState(false);

      const [errors, setErrors] = React.useState({name:null, email:null, password:null});
    
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setFetching(true);
        axios
          .post("/api/auth/login", user)
          .then((res) => {
            toast.success("Login Successfule");
            router.push("/admin/dashboard/all");
          })
          .catch((err) => {
            if(err.response){
                setErrors(err.response.data)
            } else {
                toast.error("Unable to Login Try Again");
            } 
          })
          .finally(() => {
            setFetching(false);
          });
      };

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
                endIcon={<InputIcon />}
                disabled={fetching}>
                Login 
            </Button>
            <p className="text-black">
                Not Yet Registered?{" "}
                <Link href="/auth/register" className="text-orange-700">
                    Register New Account
                </Link>
            </p>
            </Box>
        </Auth>
    )
}