import React, {useState, ChangeEvent} from "react"
import {toast } from "react-toastify";

interface FileInfoType{
    media:string,
    currentfile:object,
    filetype:string
}

export default function ReportAdd(props:any){
    const [data, setdata] = useState<FileInfoType>({media:"", currentfile:{}, filetype:""})

    const selectvideo = (event:ChangeEvent<HTMLInputElement>) => {

        const fileInput = event.target;

        if (!fileInput.files) {
          toast.error("No file was chosen");
          return;
        }
    
        if (!fileInput.files || fileInput.files.length === 0) {
          toast.error("Files list is empty");
          setdata({media:"", currentfile:{}, filetype:""})
          return;
        }
    
        const file = fileInput.files[0];

        const path = URL.createObjectURL(file);

        const filetype = file.type

        setdata({media:path, currentfile:file, filetype:filetype});
    }

    const uploadvideo = () =>{
        props.uploadfile(data.currentfile)
    }
    return(
        <div className="w-100">
            <div className="w-100 flex justify-between">
                    <input className="font-bold my-4" accept="video/*, image/*" type="file" onChange={(e) => selectvideo(e)}/>
                {data.media&&
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 my-auto" onClick={()=>uploadvideo()}>
                        Upload
                    </button>
                }
            </div>
            <div className="w-100 mt-2">
                {
                    data.filetype.includes("video")?<video className="max-w-3xl w-5/6 mx-auto" src={data.media} controls/>:<img className="max-w-3xl w-5/6 mx-auto" src={data.media}/>
                }
            </div>
        </div>
    )
}