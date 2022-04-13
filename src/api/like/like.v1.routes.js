import express from 'express';
import Like from './like.model.js';

const router = express.Router({ mergeParams: true });

router.get('', async (req, res) => {
  const likable = {
    likableId: req.params.commentId ? req.params.commentId : req.params.postId,
    likableType: req.params.commentId ? 'comment' : 'post',
  };
  const likes = await Like.findAll({
    where: likable,
  });
  res.json(likes);
});

router.get('/:id', async (req, res) => {
  const like = await Like.findByPk(req.params.id);
  res.json(like);
});

router.post('', async (req, res) => {
  const likable = {
    likableId: req.params.commentId ? req.params.commentId : req.params.postId,
    likableType: req.params.commentId ? 'comment' : 'post',
  };
  const data = { ...req.body, ...likable };
  const newLike = await Like.create(data);
  res.json(newLike);
});

router.put('/:id', async (req, res) => {
  const like = await Like.update(req.body, { where: { id: req.params.id } });
  res.json(like);
});

router.delete('/:id', async (req, res) => {
  const like = await Like.destroy({ where: { id: req.params.id } });
  res.json(like);
});

export default router;
