import express from 'express';
import Post from './post.model.js';
import commentRouter from '../comment/comment.v1.routes.js';
import likeRouter from '../like/like.v1.routes.js';

const router = express.Router({ mergeParams: true });

router.use('/:postId/comments', commentRouter);
router.use('/:postId/likes', likeRouter);

router.get('', async (req, res) => {
  const posts = await Post.findAll({
    where: { authorId: req.params.authorId },
  });
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.authorId === parseInt(req.params.authorId, 10)) {
    res.json(post);
  }
  res.json({ message: 'Wrong Author ID!' });
});

router.post('', async (req, res) => {
  const data = { ...req.body, authorId: parseInt(req.params.authorId, 10) };
  const newPost = await Post.create(data);
  res.json(newPost);
});

router.put('/:id', async (req, res) => {
  const post = await Post.update(req.body, {
    where: { id: req.params.id, authorId: req.params.authorId },
  });
  res.json(post);
});

router.delete('/:id', async (req, res) => {
  const post = await Post.destroy({
    where: { id: req.params.id, authorId: req.params.authorId },
  });
  res.json(post);
});

export default router;
