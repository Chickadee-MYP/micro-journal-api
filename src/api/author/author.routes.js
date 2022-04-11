import express from 'express';
import restFactory from '../../utils/rest-route.factory.js';
import Post from '../post/post.model.js';
// import postRoute from '../post/post.route.js';
import Author from './author.model.js';

const router = express.Router();

// const authorRoutes = async (req, res, next) => {
//   router.param('');
//   //  GET
//   //  /authors/:authorId/posts

//   // POST
//   //  /authors/:authorId/posts

//   // Everything else
//   //  router.route('/:authorId/posts)
// };

export default await restFactory(Author);
