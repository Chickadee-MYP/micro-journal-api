import express from 'express';
import Post from './post.model.js';

const router = express.Router({ mergeParams: true });

router.get('', async (req, res) => {
  const posts = await Post.findAll({
    where: { authorId: req.params.authorId },
  });
  res.json(posts);
  // console.log(req.params.authorId);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.authorId === parseInt(req.params.authorId, 10)) {
    res.json(post);
  }
  res.json({ message: 'Wrong Author ID!' });
});

router.post('', async (req, res) => {
  const data = { ...req.body, ...req.params.authorId };
  const newPost = await Post.create(data);
  console.log(data);
  res.json(newPost);
});

router.put('/:id', async (req, res) => {
  const post = await Post.update(req.body, { where: { id: req.params.id } });
  res.json(post);
});

router.delete('/:id', async (req, res) => {
  const post = await Post.destroy({ where: { id: req.params.id } });
  res.json(post);
});

export default router;
