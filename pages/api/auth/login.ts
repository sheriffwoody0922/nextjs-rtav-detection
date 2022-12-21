import User from "../../../models/user";
// import ReportType from "../../../models/reporttype";
import _ from "lodash";
import bcrypt from "bcryptjs";
import loginValidator from "../../../validators/auth/loginValidator";
import nextSessionMiddleware from "../../../next-middlewares/next-session-middleware";

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

    // let reporttype = new ReportType({
    //   typename:"Dangerous driving",
    //   typeprice:20
    // })

    // await reporttype.save();

    if (!validPassword)
      return res.status(400).send({ password: "Invalid password" });


    req.session.set("user", _.pick(user, ["_id", "email", "name", "usertype"]));
    await req.session.save();

    return res.status(200).send(user);
  }
  return res.status(404).send("");
};
export default nextSessionMiddleware(handler);
