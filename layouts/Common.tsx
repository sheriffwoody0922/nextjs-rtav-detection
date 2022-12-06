import React, {useState} from 'react';
import { useRouter } from "next/router";
import PropTypes, { InferProps } from "prop-types";

import ReportAdd from "../components/Common/ReportAdd";
import axios, { AxiosRequestConfig } from "axios";
import {toast } from "react-toastify";

export default function Common ({children, layoutData}:InferProps<typeof Common.propTypes>) {
    
    const router = useRouter();
    const [reports, setReports] = useState<any>([])
    const [reporttypes, setReporttypes] = useState<any>([])

    React.useEffect(() => {
        console.log("Common",layoutData);
        if (!layoutData.user)
            router.push("/auth/login")
    }, []);

    const getreportinfo = async () => {
        axios
            .post("/api/common/getreporterinfo", layoutData.user)
            .then((res:any) => {
                setReports(res.data);
            })
            .catch((err) => {
            })
            .finally(() => {
        });
    }

    const getreporttypes = async () => {
        axios
            .post("/api/common/getreporttypes", layoutData.user)
            .then((res:any) => {

                setReporttypes(res.data);
            })
            .catch((err) => {
            })
            .finally(() => {
        });
    }

    React.useEffect(()=>{
        getreportinfo();
        getreporttypes();
    }, [])

    const uploadandsubmit = async (file:any, carnumber:string) => {

        try {
            let formData = new FormData();
            formData.append("useremail", layoutData.user.email)
            formData.append("carnumber", carnumber)
            formData.append("file", file);

            const options: AxiosRequestConfig = {
                headers: { "Content-Type": "multipart/form-data" },
            };

            await axios.post("/api/common/report", formData, options).then(res=>{
                toast.success(res.data.message)
                getreportinfo();
            })

        } catch (e: any) {
                const error =
                e.response && e.response.data
                    ? e.response.data.error
                    : "Sorry! something went wrong.";
                toast.error(error)
        };
    }



    return (
        <>
                {layoutData.user&&
                <div className="w-full">
                <div className="w-10/12 lg:w-9/12 mx-auto mt-8 divide-y">
                    <div className="w-100 flex justify-between my-1 p-1">
                        <h1 className="font-sans text-2xl font-semibold text-emerald-600 md:text-3xl lg:text-4xl">{`Hi 👋 ${layoutData.user.name}`}</h1>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36"
                            onClick={(e) => {
                                e.preventDefault();
                                axios.get("/api/auth/logout").then((res) => {
                                    toast.success("Logged Out Successfully");
                                    router.push("/");
                                });
                            }}
                        > 
                        Sign Out
                        </button>
                    </div>
                    <div className="w-100 p-1">
                        <div className="w-100 flex justify-between my-4">
                            <h2 className="text-xl"> Current your reports (<span className="text-emerald-600">{reports.length}</span>).</h2>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36">Add Report</button>
                        </div>
                        <div className="w-100">
                            <ReportAdd uploadfile={uploadandsubmit} typesdata={reporttypes}></ReportAdd>
                            {children}
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
