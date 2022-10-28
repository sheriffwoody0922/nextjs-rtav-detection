import React from "react";
import {useRouter} from "next/router";

import Admin from "../../../layouts/Admin";
import ReportDataGrid from "../../../components/DataGrid/ReportDataGrid";


export default function Dashboard(){

    const router = useRouter()
    const { flag } = router.query

    return(
        <Admin>
            <ReportDataGrid />
        </Admin>
    )
}