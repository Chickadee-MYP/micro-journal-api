import express from 'express';
import Like from './like.model.js';

const router = express.Router();

router.get('/likes', async (req, res) => {
  const likes = await Like.findAll();
  res.json(likes);
});

router.get('/likes/:id', async (req, res) => {
  const like = await Like.findByPk(req.params.id);
  res.json(like);
});

router.post('/likes', async (req, res) => {
  const newLike = await Like.create(req.body);
  res.json(newLike);
});

router.put('/likes/:id', async (req, res) => {
  const like = await Like.update(req.body, { where: { id: req.params.id } });
  res.json(like);
});

router.delete('/likes/:id', async (req, res) => {
  const like = await Like.destroy({ where: { id: req.params.id } });
  res.json(like);
});

export default router;
