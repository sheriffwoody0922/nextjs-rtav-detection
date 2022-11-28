import React, {useState, ChangeEvent} from "react"
import Button from "@mui/material/Button"
import {toast } from "react-toastify";
import { any } from "prop-types";


interface FileInfoType{
    video:string,
    currentfile:object,
}

export default function ReportAdd(props:any){
    const [data, setdata] = useState<FileInfoType>({video:"", currentfile:{}})

    const selectvideo = (event:ChangeEvent<HTMLInputElement>) => {

        const fileInput = event.target;

        if (!fileInput.files) {
          toast.error("No file was chosen");
          return;
        }
    
        if (!fileInput.files || fileInput.files.length === 0) {
          toast.error("Files list is empty");
          return;
        }
    
        const file = fileInput.files[0];

        const path = URL.createObjectURL(file);
        setdata({video:path, currentfile:file});
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