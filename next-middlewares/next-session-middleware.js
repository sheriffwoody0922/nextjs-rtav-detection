import { withIronSession } from "next-iron-session";
import sessionOptions from "./sessionOptions";
const nextSessionMiddleware = (handler) => {
  console.log(sessionOptions);
  return withIronSession(handler, sessionOptions);
};

export default nextSessionMiddleware;
