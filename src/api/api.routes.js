import express from 'express';
import authorRoutes from './author/author.routes.js';
import postRoutes from './post/post.routes.js';
import commentRoutes from './comment/comment.routes.js';
import likeRoutes from './like/like.routes.js';

const router = express.Router();

router.use('/authors', authorRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/likes', likeRoutes);

export default router;
