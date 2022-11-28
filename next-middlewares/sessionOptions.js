const sessionOptions = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  cookieOptions: {
    // secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: true,
    maxAge: 3600,
  },
  password: process.env.APPLICATION_SECRET,
};
export default sessionOptions;
