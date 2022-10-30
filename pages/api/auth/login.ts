import User from "../../../models/user";
import Car from "../../../models/car";
import Report from "../../../models/report";

import _ from "lodash";
import bcrypt from "bcryptjs";
import loginValidator from "../../../validators/auth/loginValidator";
import nextSessionMiddleware from "../../../next-middlewares/next-session-middleware";
import { faker } from '@faker-js/faker';

const handler = async function handler(req:any, res:any) {
  if (req.method == "POST") {
    let errors = loginValidator(req.body);
    if (errors) return res.status(400).json(errors);
    let user = await User.findOne({
      email: req.body.email,
    });
    // console.log(user);
    if (!user) return res.status(400).send({ email: "Account Does Not Exist" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send({ password: "Invalid password" });
    req.session.set("user", _.pick(user, ["_id", "email", "name"]));

    await req.session.save();

    // user's fake car made
    
    // User.find({}).lean().exec(function(error, records) {
    //     records.forEach(function(record) {
    //         let car = new Car({carnumber:`${faker.vehicle.manufacturer()} ${faker.vehicle.model() }`, owner:record._id})
    //         car.save();
    //     });
    // });
    
    // fake reports made
    // User.count().exec(function (err, count) {

    //     for(let i = 0; i < 15; i++){
    //         // Get a random entry
    //         var random = Math.floor(Math.random() * count)
        
    //         // Again query all users but only fetch one offset by our random #
    //         User.findOne().skip(random).exec(
    //         function (err, result) {
    //             // Tada! random user
    //             let report = new Report({
    //                 reportowner:result._id, 
    //                 reportvideo:"/video", 
    //                 reportgps:`${faker.address.latitude()} ${faker.address.longitude()}`,
    //                 reportdate:new Date(),
    //                 reportedcar:`${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
    //                 reportfine:10,
    //                 reportflag:"new"
    //             });
    //             report.save();
    //         })
    //     }
    // })
    

    return res.status(200).send("Login");
  }
  return res.status(404).send("");
};
export default nextSessionMiddleware(handler);
