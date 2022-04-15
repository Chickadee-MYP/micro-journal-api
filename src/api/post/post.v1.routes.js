import express from 'express';
import Post from './post.model.js';
import commentRouter from '../comment/comment.v1.routes.js';
import likeRouter from '../like/like.v1.routes.js';

const router = express.Router({ mergeParams: true });

router.use('/:postId/comments', commentRouter);
router.use('/:postId/likes', likeRouter);

router.get('', async (req, res) => {
  const posts = req.params.userId
    ? await Post.findAll({
        where: { userId: req.params.userId },
      })
    : await Post.findAll();
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.userId === parseInt(req.params.userId, 10)) {
    res.json(post);
  }
  res.json({ message: 'Wrong Author ID!' });
});

router.post('', async (req, res, next) => {
  if (req.user.id !== parseInt(req.params.userId, 10))
    next(
      new Error({
        status: 403,
        message: 'You may not create a post for another user.',
      })
    );
  const data = { ...req.body, userId: parseInt(req.params.userId, 10) };
  const newPost = await Post.create(data);
  res.json(newPost);
});

router.put('/:id', async (req, res) => {
  const post = await Post.update(req.body, {
    where: { id: req.params.id, userId: req.params.userId },
  });
  res.json(post);
});

router.delete('/:id', async (req, res) => {
  const post = await Post.destroy({
    where: { id: req.params.id, userId: req.params.userId },
  });
  res.json(post);
});

export default router;
