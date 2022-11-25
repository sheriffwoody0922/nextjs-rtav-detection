import User from "../../../models/user";
import Car from "../../../models/car";

import { faker } from '@faker-js/faker';

const handler = async function handler(req:any, res:any) {
    
  if (req.method == "GET") {
    
    User.find({}).lean().exec(function(error, records) {
        records.forEach(function(record) {
            let car = new Car({carnumber:`${faker.vehicle.manufacturer()} ${faker.vehicle.model() }`, owner:record._id})
            car.save();
        });
    });
    
    return res.status(200).send("Fake Cars Data Generated!");
  }
  return res.status(404).send("");
};
export default handler;
