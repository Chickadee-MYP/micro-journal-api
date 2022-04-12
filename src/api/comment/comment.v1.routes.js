import express from 'express';
import Comment from './comment.model.js';

const router = express.Router();

router.get('/comments', async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
});

router.get('/comments/:id', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  res.json(comment);
});

router.post('/comments', async (req, res) => {
  const newComment = await Comment.create(req.body);
  res.json(newComment);
});

router.put('/comments/:id', async (req, res) => {
  const comment = await Comment.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(comment);
});

router.delete('/comments/:id', async (req, res) => {
  const comment = await Comment.destroy({ where: { id: req.params.id } });
  res.json(comment);
});

export default router;
