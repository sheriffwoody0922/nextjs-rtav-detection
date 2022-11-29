import React, {useState, ChangeEvent} from "react"
import {toast } from "react-toastify";

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
          setdata({video:"", currentfile:{}})
          return;
        }
    
        const file = fileInput.files[0];

        const path = URL.createObjectURL(file);
        setdata({video:path, currentfile:file});
    }

    const uploadvideo = () =>{
        const uploaded = props.uploadfile(data.currentfile)
        if(uploaded){
            setdata({video:"", currentfile:{}})
        }
    }
    return(
        <div className="w-100">
            <div className="w-100 flex justify-between">
                    <input className="font-bold my-4" accept="video/*" type="file" onChange={(e) => selectvideo(e)}/>
                {data.video&&
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 my-auto" onClick={()=>uploadvideo()}>
                        Upload
                    </button>
                }
            </div>
            <div className="w-100 mt-2">
                <video className="max-w-3xl w-5/6 mx-auto" src={data.video} controls></video>
            </div>
        </div>
    )
}