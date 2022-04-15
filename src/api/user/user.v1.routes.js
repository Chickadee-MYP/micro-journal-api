import express from 'express';
import User from './user.model.js';
import postRouter from '../post/post.v1.routes.js';

const router = express.Router();

router.use('/:userId/posts', postRouter);

router.get('', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post('', async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

router.put('/:id', async (req, res) => {
  const user = await User.update(req.body, {
    // where: { id: req.params.id },
    where: { id: req.user.id },
    individualHooks: req.body?.password,
  });
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const user = await User.destroy({ where: { id: req.params.id } });
  res.json(user);
});

export default router;
