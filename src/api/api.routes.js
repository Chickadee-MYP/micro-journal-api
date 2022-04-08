import express from 'express';
import authorRoutes from './author/author.routes.js';
// import postRoutes from './post/post.routes.js';

const router = express.Router();

router.use('/authors', authorRoutes);
// router.use('/posts', postRoutes);

export default router;
