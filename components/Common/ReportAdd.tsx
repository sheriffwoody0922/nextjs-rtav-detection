import React, {useState} from "react"
import Button from "@mui/material/Button"

export default function ReportAdd(){
    const [data, setdata] = useState({video:undefined})

    const selectvideo = (event:React.SyntheticEvent) =>{
        console.log(event.target.files[0]);
            const path = URL.createObjectURL(event.target.files[0]);
            setdata({video:path});
    }
    return(
        <div className="w-100">
            <div className="w-100 flex justify-between">
                <Button variant="outlined" component="label">
                    Choose file
                    <input accept="video/*" type="file" hidden onChange={(e) => selectvideo(e)}/>
                </Button>
            </div>
            <div className="w-100 mt-2">
                <video className="max-w-3xl mx-auto" src={data.video} controls></video>
            </div>
        </div>
    )
}