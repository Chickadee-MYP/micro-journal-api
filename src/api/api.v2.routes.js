import express from 'express';
import checkAuth from '../auth/auth.js';
import userRoutes from './user/user.v2.routes.js';
import postRoutes from './post/post.v2.routes.js';
import commentRoutes from './comment/comment.v2.routes.js';
import likeRoutes from './like/like.v2.routes.js';

const router = express.Router();

router.use(checkAuth);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/likes', likeRoutes);

export default router;
