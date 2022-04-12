import express from 'express';
import Comment from './comment.model.js';
import likeRouter from '../like/like.v1.routes.js';

const router = express.Router({ mergeParams: true });

router.use('/:commentId/likes', likeRouter);

router.get('', async (req, res) => {
  const comments = await Comment.findAll({
    where: { postId: req.params.postId },
  });
  res.json(comments);
});

router.get('/:id', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (comment.postId === parseInt(req.params.postId, 10)) {
    res.json(comment);
  }
  res.json({ message: 'wrong comment ID' });
});

router.post('', async (req, res) => {
  const data = { ...req.body, postId: parseInt(req.params.postId, 10) };
  const newComment = await Comment.create(data);
  res.json(newComment);
});

router.put('/:id', async (req, res) => {
  const comment = await Comment.update(req.body, {
    where: { id: req.params.id, postId: req.params.postId },
  });
  res.json(comment);
});

router.delete('/:id', async (req, res) => {
  const comment = await Comment.destroy({
    where: { id: req.params.id, postId: req.params.postId },
  });
  res.json(comment);
});

export default router;
