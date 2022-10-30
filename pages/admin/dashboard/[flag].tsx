import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";

import Admin from "../../../layouts/Admin";
import ReportDataGrid from "../../../components/DataGrid/ReportDataGrid";
import {GridRowsProp} from '@mui/x-data-grid';



export default function Dashboard(){

    const [data, setData] = useState([])
    const router = useRouter()
    const { flag } = router.query

    useEffect(()=>{
        console.log(`This is ${flag}`);
        if(flag){
            axios
            .post("/api/admin/dashboard/getdata", {flag:flag})
            .then((res:any) => {

                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
            })
            .finally(() => {
            });
        }
    },[flag])

    return(
        <Admin>
            <ReportDataGrid filterkey={flag} data={data}/>
        </Admin>
    )
}