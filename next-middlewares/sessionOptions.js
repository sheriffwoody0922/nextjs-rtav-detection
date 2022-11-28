const sessionOptions = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  cookieOptions: {
    sameSite: true,
    maxAge: 3600,
  },
  password: process.env.APPLICATION_SECRET,
};
export default sessionOptions;
