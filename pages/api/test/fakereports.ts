import User from "../../../models/user";
import Car from "../../../models/car";
import Report from "../../../models/report";

import _ from "lodash";
import bcrypt from "bcryptjs";
import loginValidator from "../../../validators/auth/loginValidator";
import nextSessionMiddleware from "../../../next-middlewares/next-session-middleware";
import { faker } from '@faker-js/faker';

const handler = async function handler(req:any, res:any) {
  if (req.method == "GET") {

    User.count().exec(function (err, count) {

        for(let i = 0; i < 20; i++){
            // Get a random entry
            var random = Math.floor(Math.random() * count)

            // Again query all users but only fetch one offset by our random #
            User.findOne().skip(random).exec(
            function (err, result) {
                // Tada! random user
                let report = new Report({
                    reportowner:result._id,
                    reportvideo:"/videos/1.mp4", 
                    reportgps:`${faker.address.latitude()} ${faker.address.longitude()}`,
                    reportdate:new Date(),
                    reportedcar:`${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
                    reportfine:10,
                    sendedwhatsapp:"",
                    reportflag:"new"
                });
                report.save();
                let number = result.reportnumber + 1;
                console.log(number);
            })
          }
    })


    return res.status(200).send("Fake Reportdata Generated!");
  }
  return res.status(404).send("");
};
export default nextSessionMiddleware(handler);
