import express from 'express';
import checkAuth from '../auth/auth.js';
import userRouter from './user/user.v1.routes.js';
import addressRouter from './address/address.v1.routes.js';
import postRouter from './post/post.v1.routes.js';
import commentRouter from './comment/comment.v1.routes.js';
import likeRouter from './like/like.v1.routes.js';

const router = express.Router();

router.use(checkAuth);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/likes', likeRouter);
router.use('/address', addressRouter);

export default router;
