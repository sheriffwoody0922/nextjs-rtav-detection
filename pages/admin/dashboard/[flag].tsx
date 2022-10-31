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
    },[flag])

    return(
        <Admin layoutData={props.layoutData}>
            <ReportDataGrid filterkey={flag} data={data}/>
        </Admin>
    )
}

export const getServerSideProps = async function (context:any) {
    let layoutData = await sessionProps(context);
  
    return { props: { layoutData } };
};