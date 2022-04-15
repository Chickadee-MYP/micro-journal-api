/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import express from 'express';
import passport from 'passport';
import generateJwt from './generate-jwt.js';
import User from '../api/user/user.model.js';

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { username } = req.body;
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return next(new Error({ message: 'Username not available' }));
    }
    const user = User.create(req.body);
    const token = generateJwt(user);
    res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (error, user, info) => {
    try {
      if (error) return next(error);
      if (!user) {
        info ??= { status: 401, message: 'Unable to authenticate.' };
        return next(new Error(info));
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        const token = generateJwt(user);
        res.status(200).json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default router;
