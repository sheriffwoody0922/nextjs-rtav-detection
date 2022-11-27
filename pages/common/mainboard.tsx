import React, { useEffect } from 'react';
import sessionProps from "../../next-middlewares/sessionProps";

function Mainboard (props:any) {

    useEffect(()=>{
        console.log(props.layoutData.user)
    },[])

    return (
        <>
            ddd
        </>
    )
}

export default Mainboard;


export const getServerSideProps = async function (context:any) {
    let layoutData = await sessionProps(context);
  
    return { props: { layoutData } };
};