import ReportType from "../../../models/reporttype";
import { faker } from '@faker-js/faker';
import bcrypt from "bcryptjs";

const handler = async function handler(req:any, res:any) {
  if (req.method == "GET") {

    const data = [
        {
            typename:"Dangerous driving",
            typeprice:20,
        },
        {
            typename:"Traffic light not obeyed",
            typeprice:30,
        },
        {
            typename:"Illegal Overtake",
            typeprice:40,
        },
        {
            typename:"Illegal stopping",
            typeprice:50,
        },
        {
            typename:"Failure to stop after accident",
            typeprice:60,
        }
    ]

    for(let i = 0; i < data.length; i++){
        const reporttype = new ReportType({typename:data[i].typename, typeprice:data[i].typeprice});
        await reporttype.save();
    }

    return res.status(200).send("Fake ReportType Data Generated!");
  }
  return res.status(404).send("");
};
export default handler;
