import User from "../../../models/user";
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

      const user = await User.findOne({email: fields.useremail})
      if(user.reportlimit == user.reportnumber){
        return res.status(400).send({error: "You can't report now!"})
      }
      const fileinfo = await saveFile(files.file)
      let reportnumber = user.reportnumber + 1;
      user.reportnumber = reportnumber;
      await user.save()

      User.findOne({email: fields.useremail,}).exec(
        function (err, result) {
            // Tada! random user
            let report = new Report({
                reportowner:result._id,
                reporttype:"standard",
                reportmedia:{filepath:fileinfo.path, filetype:fileinfo.type}, 
                reportgps:`${faker.address.latitude()} ${faker.address.longitude()}`,
                reportdate:new Date(),
                reportedcar: fields.carnumber,  
                reportfine:20,
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