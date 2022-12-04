import User from "../../../models/user";
import Car from "../../../models/car";
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
      console.log(fields);
      const path = await saveFile(files.file)

      User.findOne({email: fields.useremail,}).exec(
        function (err, result) {
            // Tada! random user
            let report = new Report({
                reportowner:result._id,
                reporttype:fields.reporttype,
                reportvideo:path, 
                reportgps:`${faker.address.latitude()} ${faker.address.longitude()}`,
                reportdate:new Date(),
                reportedcar:`${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
                reportfine:10,
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
  return `/uploads/${file.newFilename}.${extension[1]}`;
};