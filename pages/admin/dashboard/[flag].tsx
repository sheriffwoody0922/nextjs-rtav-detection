import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";

import Admin from "../../../layouts/Admin";
import ReportDataGrid from "../../../components/DataGrid/ReportDataGrid";
import sessionProps from "../../../next-middlewares/sessionProps";



export default function Dashboard(props:any){

    const [data, setData] = useState([])
    const router = useRouter()
    const { flag } = router.query

    useEffect(()=>{
        console.log(`This is ${flag}`);
        if(flag){
            getdata();
        }
    },[flag])

    const getdata = () => {
        axios
        .post("/api/admin/dashboard/getdata", {flag:flag})
        .then((res:any) => {
            setData(res.data);
        })
        .catch((err) => {
        })
        .finally(() => {
        });
    }
    const updatedata = (data:any) => {
        axios
            .post("/api/admin/dashboard/setdata", data)
            .then((res:any) => {
                getdata();
            })
            .catch((err) => {
            })
            .finally(() => {
        });
    }

    return(
        <Admin layoutData={props.layoutData}>
            <ReportDataGrid filterkey={flag} data={data} updateData={updatedata}/>
        </Admin>
    )
}

export const getServerSideProps = async function (context:any) {
    let layoutData = await sessionProps(context);
  
    return { props: { layoutData } };
};