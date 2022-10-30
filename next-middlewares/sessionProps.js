import nextSessionMiddleware from "./next-session-middleware";
const sessionProps = async ({ req, res }) => {
  let user = req.session.get("user");
  if (!user) user = null;
  return { user };
};

export default nextSessionMiddleware(sessionProps);
