import express from 'express';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import authorRouter from './api/author/author.v1.routes.js';
import addressRouter from './api/address/address.v1.routes.js';
import postRouter from './api/post/post.v1.routes.js';
import commentRouter from './api/comment/comment.v1.routes.js';
import likeRouter from './api/like/like.v1.routes.js';

const router = express.Router();

router.use('/authors', authorRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/likes', likeRouter);
router.use('/address', addressRouter);

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

export default router;
