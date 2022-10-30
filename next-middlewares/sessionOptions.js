const sessionOptions = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
  password: process.env.APPLICATION_SECRET,
};
export default sessionOptions;
