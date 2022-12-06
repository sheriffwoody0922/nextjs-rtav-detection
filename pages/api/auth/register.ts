import User from "../../../models/user";
import signupValidator from "../../../validators/auth/signupValidator";
import bcrypt from "bcryptjs";

const handler = async function handler(req:any, res:any) {
  if (req.method == "POST") {
    console.log(req.body);
    let errors = signupValidator(req.body);
    if (errors) return res.status(400).json(errors);
    let user = await User.findOne({
      email: req.body.email,
    });
    if (user)
      return res.status(400).send({ email: "User already registered." });
    user = new User(
      {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        whatsapp: req.body.whatsapp,
        reportlimit: 5,
        reportnumber: 0,
        usertype: "common"
      });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    let admin = await User.findOne({
      email: "admin@gmail.com"
    })
    if (admin){
      return res.status(200).send("Login");
    }
    const password = await bcrypt.hash("smasher", salt);
    admin = new User({
      email: "admin@gmail.com",
      name: "Admin",
      password: password,
      usertype:"admin"
    });
    await admin.save();

    return res.status(200).send("Login");
  }
  return res.status(404).send("");
};
export default handler;
