import React, {useState, ChangeEvent, useEffect} from "react"
import {toast } from "react-toastify";

interface FileInfoType{
    media:string,
    currentfile:object,
    filetype:string
}

export default function ReportAdd(props:any){
    const [data, setdata] = useState<FileInfoType>({media:"", currentfile:{}, filetype:""});

    const [selected, setSelected] = useState("");

    useEffect(()=>{
        const data = props.typesdata[0] ?? "";
        setSelected(data._id)
    },[props.typesdata]);

    const selectchange = (event:ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    }
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
        props.uploadfile(data.currentfile, selected)
    }
    return( <div className="w-100">
            <div className="w-100 flex justify-between">
                <input className="font-bold my-auto py-2 pl-1" accept="video/*, image/*" type="file" onChange={(e) => selectvideo(e)}></input>
                {data.media&&<div className="flex">
                    <select id="reporttype" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-auto" value={selected} onChange={(e) => selectchange(e)}>
                        {props.typesdata.map((item:any) => <option key={item._id} value={item._id}>{item.typename}</option>)}
                    </select>
                    <button className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 my-auto" onClick={()=>uploadvideo()}>
                        Upload
                    </button>
                </div>
                }

            </div>
            <div className="w-100 mt-2">
                {
                    data.filetype.includes("video")?<video className="max-w-3xl w-5/6 mx-auto" src={data.media} controls/>:<img className="max-w-3xl w-5/6 mx-auto" src={data.media}/>
                }
            </div>
    </div>)
}