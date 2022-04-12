import express from 'express';
import Author from './author.model.js';
import postRouter from '../post/post.v1.routes.js';

const router = express.Router();

router.use('/:authorId/posts', postRouter);

router.get('', async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
});

router.get('/:id', async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  res.json(author);
});

router.post('', async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.json(newAuthor);
});

router.put('/:id', async (req, res) => {
  const author = await Author.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(author);
});

router.delete('/:id', async (req, res) => {
  const author = await Author.destroy({ where: { id: req.params.id } });
  res.json(author);
});

export default router;
