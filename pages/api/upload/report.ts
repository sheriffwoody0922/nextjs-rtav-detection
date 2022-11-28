import User from "../../../models/user";
import Car from "../../../models/car";
import Report from "../../../models/report";

import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};


const handler = async function handler(req:any, res:any) {
    
  if (req.method == "POST") {

    const form = new formidable.IncomingForm();
    form.uploadDir = "./";
    form.keepExtensions = true;
    form.parse(req, (err:any, fields:any, files:any) => {
      console.log(err, fields, files);
    });
    return res.status(200).send("Successfully Uploaded");


  }
  return res.status(404).send("");
};
export default handler;
