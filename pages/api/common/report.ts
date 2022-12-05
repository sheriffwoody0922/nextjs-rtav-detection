import User from "../../../models/user";
import ReportType from "../../../models/reporttype";
import Report from "../../../models/report";
import formidable from "formidable";
import fs from "fs";
import { faker } from '@faker-js/faker';


export const config = {
  api: {
    bodyParser: false
  }
};

const handler = async function handler(req:any, res:any) {

    const form = new formidable.IncomingForm();

    form.parse(req, async function (err:any, fields:any, files:any) {

      const fileinfo = await saveFile(files.file)

      let typeinfo = await ReportType.findOne({typename: "standard"});
      
      User.findOne({email: fields.useremail,}).exec(
        function (err, result) {
            // Tada! random user
            let report = new Report({
                reportowner:result._id,
                reporttype:typeinfo._id,
                reportmedia:{filepath:fileinfo.path, filetype:fileinfo.type}, 
                reportgps:`${faker.address.latitude()} ${faker.address.longitude()}`,
                reportdate:new Date(),
                reportedcar: fields.carnumber,
                reportfine:typeinfo.typeprice,
                sendedwhatsapp:"",
                reportflag:"new"
            });
            report.save();
      })
      
      res.json({message:"Successfully Added"})
    });

};
export default handler;


const saveFile = async (file:any) => {
  const data = fs.readFileSync(file.filepath);
  const extension = file.mimetype.split('/');
  fs.writeFileSync(`./public/uploads/${file.newFilename}.${extension[1]}`, data);
  await fs.unlinkSync(file.filepath);
  return {path:`/uploads/${file.newFilename}.${extension[1]}`, type:extension[0]};
};