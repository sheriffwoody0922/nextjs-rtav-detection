import nextSessionMiddleware from "./../../../next-middlewares/next-session-middleware";
const handler = async function handler(req:any, res:any) {
  if (req.method == "GET") {
    req.session.unset("user");
    await req.session.save();
    return res.status(200).send("Logged Out");
  }
  return res.status(404).send("");
};
export default nextSessionMiddleware(handler);
