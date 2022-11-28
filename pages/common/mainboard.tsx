import React from 'react';
import sessionProps from "../../next-middlewares/sessionProps";
import Common from "../../layouts/Common";

const Mainboard = (props:any) => {

    return (
        <Common layoutData={props.layoutData}>
            <div></div>
        </Common>
    )
}

export default Mainboard


export const getServerSideProps = async function (context:any) {
    let layoutData = await sessionProps(context);
  
    return { props: { layoutData } };
};
