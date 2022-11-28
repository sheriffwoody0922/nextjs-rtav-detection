import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

import Auth from "../../layouts/Auth";


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
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="someone"
                            disabled={fetching} 
                            value={user.name}
                            onChange={(e) => {setUser({ ...user, name: e.target.value })}} 
                        />
                        <p className="text-red-500 text-xs italic">{errors.name}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="useremail">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="useremail" 
                            type="email" 
                            placeholder="someone@gmail.com"
                            disabled={fetching} 
                            value={user.email}
                            onChange={(e) => {setUser({ ...user, email: e.target.value })}} 
                        />
                        <p className="text-red-500 text-xs italic">{errors.email}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="userpassword" 
                            type="password" 
                            placeholder="******" 
                            disabled={fetching} 
                            value={user.password}
                            onChange={(e) => {setUser({ ...user, password: e.target.value })}} 
                        />
                        <p className="text-red-500 text-xs italic">{errors.password}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e)=>handleSubmit(e)}>
                            Register
                        </button>
                        <p className="text-black text-xs">
                            <Link href="/auth/login" className="text-orange-700">
                                Already Registered?
                            </Link>
                        </p>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Mujiba. All rights reserved.
                </p>
            </div>
        </Auth>
    )
}