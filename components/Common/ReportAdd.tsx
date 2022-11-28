import React, {useState} from "react"
import Button from "@mui/material/Button"

export default function ReportAdd(props:any){
    const [data, setdata] = useState({video:undefined, currentfile:undefined})

    const selectvideo = (event:React.SyntheticEvent) =>{
        const path = URL.createObjectURL(event.target.files[0]);
        setdata({video:path, currentfile:event.target.files[0]});
    }

    const uploadvideo = () =>{
        props.uploadfile(data.currentfile)
    }
    return(
        <div className="w-100">
            <div className="w-100 flex justify-between">
                <Button variant="outlined" component="label">
                    Choose file
                    <input accept="video/*" type="file" hidden onChange={(e) => selectvideo(e)}/>
                </Button>
                {data.video&&
                    <Button variant="outlined" component="label" onClick={()=>uploadvideo()}>
                        Upload
                    </Button>
                }
            </div>
            <div className="w-100 mt-2">
                <video className="max-w-3xl w-5/6 mx-auto" src={data.video} controls></video>
            </div>
        </div>
    )
}