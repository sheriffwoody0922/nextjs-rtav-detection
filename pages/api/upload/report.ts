import User from "../../../models/user";
import Car from "../../../models/car";
import Report from "../../../models/report";


const handler = async function handler(req:any, res:any) {
    
  if (req.method == "POST") {

    
    return res.status(200).send("Successfully Uploaded");


  }
  return res.status(404).send("");
};
export default handler;
