import express from 'express';
import restFactory from '../../utils/rest-route.factory.js';
import Post from '../post/post.model.js';
// import postRoute from '../post/post.route.js';
import User from './user.model.js';

const router = express.Router();

export default await restFactory(User);
