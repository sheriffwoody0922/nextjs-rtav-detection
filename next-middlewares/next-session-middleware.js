import { withIronSession } from "next-iron-session";
import sessionOptions from "./sessionOptions";
const nextSessionMiddleware = (handler) => {
  return withIronSession(handler, sessionOptions);
};

export default nextSessionMiddleware;
