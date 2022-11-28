const sessionOptions = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  cookieOptions: {
    secure:false,
    maxAge: 3600,
  },
  password: process.env.APPLICATION_SECRET,
};
export default sessionOptions;
