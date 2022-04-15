import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
  if (
    typeof req.cookies.rdhToken === 'undefined' ||
    req.cookies.rdhToken === null
  ) {
    req.user = null;
  } else {
    const token = req.cookies[process.env.COOKIE_NAME];
    const decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};

// checkAuth passport.authenticate('jwt', { session: false });

export default checkAuth;
