/* eslint-disable consistent-return */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy } from 'passport-jwt';
import Account from '../author/author.model.js';

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.rdhToken;
  }
  return token;
};

// TODO: replace with admin create user
// passport.use(
//   'signup',
//   new LocalStrategy(
//     {
//       usernameField: 'username',
//       passwordField: 'password',
//     },
//     async (username, password, done) => {
//       try {
//         const existingUser = await User.findOne({ where: { username } });

//         if (existingUser) {
//           return done(null, false, { message: 'Username not available' });
//         }
//         const user = await User.create({ username, password });
//         user.employee = await user.getEmployee();
//         return done(null, user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );
passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const existingUser = await Account.findOne({ where: { username } });

        if (existingUser) {
          return done(null, false, { message: 'Username not available' });
        }
        const user = await Account.create({ username, password });
        user.employee = await user.getEmployee();
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const account = await Account.findOne({ where: { username } });
        if (!account) {
          return done(null, false, { message: 'Account not found' });
        }

        const validate = await account.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }
        account.employee = await account.getAuthor();
        return done(null, account, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: cookieExtractor,
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
