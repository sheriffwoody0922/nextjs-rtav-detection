import User from "../../../models/user";
import signupValidator from "../../../validators/auth/signupValidator";
import bcrypt from "bcryptjs";
const handler = async function handler(req:any, res:any) {
  if (req.method == "POST") {
    let errors = signupValidator(req.body);
    if (errors) return res.status(400).json(errors);
    let user = await User.findOne({
      email: req.body.email,
    });
    if (user)
      return res.status(400).send({ email: "User already registered." });
    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return res.status(200).send("Login");
  }
  return res.status(404).send("");
};
export default handler;
