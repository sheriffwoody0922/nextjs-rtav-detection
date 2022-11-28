import React from 'react';
import { useRouter } from "next/router";
import PropTypes, { InferProps } from "prop-types";

import ReportAdd from "../components/Common/ReportAdd";
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import axios, { AxiosRequestConfig } from "axios";
import {toast } from "react-toastify";

export default function Common ({children, layoutData}:InferProps<typeof Common.propTypes>) {
    
    const router = useRouter();


    React.useEffect(() => {
        console.log("Common",layoutData);
        if (!layoutData.user) 
            router.push("/auth/login")
    }, []);

    const uploadandsubmit = async (file:any) => {

    try {
        let formData = new FormData();
        formData.append("file", file);

        const options: AxiosRequestConfig = {
        headers: { "Content-Type": "multipart/form-data" },
        };

        const {
        data: { data },
        } = await axios.post<{
        data: {
            url: string | string[];
        };
        }>("/api/upload/report", formData, options);

        console.log("File was uploaded successfylly:", data);
    } catch (e: any) {
            console.error(e);
            const error =
            e.response && e.response.data
                ? e.response.data.error
                : "Sorry! something went wrong.";
            alert(error);
    };
    }



    return (
        <>
                {layoutData.user&&
                <div className="w-screen">
                <div className="w-10/12 lg:w-9/12 mx-auto mt-8 divide-y">
                    <div className="w-100 flex justify-between my-1 p-1">
                        <h1 className="font-sans text-2xl font-semibold text-emerald-600 md:text-3xl lg:text-4xl">{layoutData.user.name}</h1>
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                axios.get("/api/auth/logout").then((res) => {
                                    toast.success("Logged Out Successfully");
                                    router.push("/");
                                });
                            }} 
                        > 
                            <LogoutIcon /> 
                        </IconButton>
                    </div>
                    <div className="w-100 p-1">
                        <div className="w-100 flex justify-between my-4">
                            <h2 className="text-xl"> Current your reports (<span className="text-emerald-600">15</span>).</h2>
                            <Button className="bg-blue-600" variant="contained">Add Report</Button>
                        </div>
                        <div className="w-100">
                            <ReportAdd uploadfile={uploadandsubmit}></ReportAdd>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

Common.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    layoutData: PropTypes.any.isRequired,
}
