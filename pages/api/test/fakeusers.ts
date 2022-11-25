import User from "../../../models/user";
import { faker } from '@faker-js/faker';
import bcrypt from "bcryptjs";

const handler = async function handler(req:any, res:any) {
  if (req.method == "GET") {

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash("smasher", salt);


    // create temp users
    
    // const temppassword = user.password;

    for(let i = 0; i < 10; i++)
    {
      const user = new User({name:faker.name.fullName(), email:faker.internet.email(), password:password, whatsapp: faker.address.zipCode(), reportlimit:5, reportnumber:0, address:faker.address.streetAddress(), });
      await user.save();
    }
    

    return res.status(200).send("Fake Users Data Generated!");
  }
  return res.status(404).send("");
};
export default handler;
