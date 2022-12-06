import ReportType from "../../../models/reporttype";
import { faker } from '@faker-js/faker';
import bcrypt from "bcryptjs";

const handler = async function handler(req:any, res:any) {
  if (req.method == "GET") {

    const data = [
        {
            label:"standard",
            value:20,
        },
        {
            label:"Dangerous driving",
            value:40,
        },
        {
            label:"Traffic light not obeyed",
            value:60,
        },
        {
            label:"Illegal Overtake",
            value:80,
        },
        {
            label:"Illegal stopping",
            value:100,
        },
        {
            label:"Failure to stop after accident",
            value:120,
        }
    ]

    for(let i = 0; i < data.length; i++){
        const reporttype = new ReportType({label:data[i].label, value:data[i].value});
        await reporttype.save();
    }

    return res.status(200).send("Fake ReportType Data Generated!");
  }
  return res.status(404).send("");
};
export default handler;
