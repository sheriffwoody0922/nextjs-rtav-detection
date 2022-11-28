const sessionOptions = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  cookieOptions: {
    maxAge: 3600,
  },
  password: process.env.APPLICATION_SECRET,
};
export default sessionOptions;
