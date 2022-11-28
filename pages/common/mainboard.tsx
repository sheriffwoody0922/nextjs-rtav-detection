import React, { useEffect } from 'react';
import sessionProps from "../../next-middlewares/sessionProps";
import ReportAdd from "../../components/Common/ReportAdd";
import Button from '@mui/material/Button';


function Mainboard (props:any) {

    useEffect(()=>{
        console.log(props.layoutData.user)
    },[])

    return (
        <div className="w-screen">
            <div className="w-10/12 lg:w-9/12 mx-auto mt-8 divide-y">
                <div className="w-100 flex justify-between my-1 p-1">
                    <h1 className="font-sans text-2xl font-semibold text-emerald-600 md:text-3xl lg:text-4xl">{props.layoutData.user.name}</h1>
                    <Button className="bg-blue-600" variant="contained">Log Out</Button>
                </div>
                <div className="w-100 p-1">
                    <div className="w-100 flex justify-between my-4">
                        <h2 className="text-xl"> Current your reports (<span className="text-emerald-600">15</span>).</h2>
                        <Button className="bg-blue-600" variant="contained">Add Report</Button>
                    </div>
                    <div className="w-100">
                        <ReportAdd></ReportAdd>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainboard;


export const getServerSideProps = async function (context:any) {
    let layoutData = await sessionProps(context);
  
    return { props: { layoutData } };
};