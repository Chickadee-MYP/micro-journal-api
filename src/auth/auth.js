/* eslint-disable consistent-return */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import logger from '../config/logger.js';
import User from '../api/user/user.model.js';

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await User.scope('auth').findOne({ where: { username } });
        if (!user) {
          return done(null, false, { status: 400, message: 'User not found' });
        }
        const validate = await user.isValidPassword(password);
        if (!validate) {
          return done(null, false, { status: 400, message: 'Wrong Password' });
        }
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

const cookieExtractor = req => {
  let token = null;
  if (req?.cookies) {
    token = req.cookies[process.env.COOKIE_NAME];
  }
  return token;
};

const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromExtractors([
    cookieExtractor,
    ExtractJwt.fromAuthHeaderAsBearerToken(),
  ]),
};

passport.use(
  'jwt',
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await User.findByPk(jwtPayload.id);

      if (user) {
        logger.info('user found in db in passport');
        done(null, user);
      } else {
        logger.warn('user not found in db');
        done(null, false);
      }
    } catch (error) {
      done(error);
    }
  })
);

const checkAuth = passport.authenticate('jwt', { session: false });

export default checkAuth;
