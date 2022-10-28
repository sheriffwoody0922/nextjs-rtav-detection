import React from "react";
import ReportDataGrid from "../../components/DataGrid/ReportDataGrid";

import Admin from "../../layouts/Admin";

export default function Dashboard(){
    return(
        <Admin>
            <ReportDataGrid />
        </Admin>
    )
}