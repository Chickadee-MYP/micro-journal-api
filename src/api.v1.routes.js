import express from 'express';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import Author from './api/author/author.model.js';
import Address from './api/address/address.model.js';
import Post from './api/post/post.model.js';
import Comment from './api/comment/comment.model.js';
import Like from './api/like/like.model.js';

const router = express.Router();

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

router.get('/authors', jwtCheck, async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
});

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

router.get('/comments', async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
});

router.get('/likes', async (req, res) => {
  const likes = await Like.findAll();
  res.json(likes);
});

router.get('/addresses', async (req, res) => {
  const addresses = await Address.findAll();
  res.json(addresses);
});

router.get('/authors/:id', async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  res.json(author);
});

router.get('/posts/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.json(post);
});

router.get('/comments/:id', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  res.json(comment);
});

router.get('/likes/:id', async (req, res) => {
  const like = await Like.findByPk(req.params.id);
  res.json(like);
});

router.get('/addresses/:id', async (req, res) => {
  const address = await Address.findByPk(req.params.id);
  res.json(address);
});

router.post('/authors', async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.json(newAuthor);
});

router.post('/posts', async (req, res) => {
  const newPost = await Post.create(req.body);
  res.json(newPost);
});

router.post('/comments', async (req, res) => {
  const newComment = await Comment.create(req.body);
  res.json(newComment);
});

router.post('/likes', async (req, res) => {
  const newLike = await Like.create(req.body);
  res.json(newLike);
});

router.post('/addresses', async (req, res) => {
  const newAddress = await Address.create(req.body);
  res.json(newAddress);
});

router.put('/authors/:id', async (req, res) => {
  const author = await Author.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(author);
});

router.put('/posts/:id', async (req, res) => {
  const post = await Post.update(req.body, { where: { id: req.params.id } });
  res.json(post);
});

router.put('/comments/:id', async (req, res) => {
  const comment = await Comment.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(comment);
});

router.put('/likes/:id', async (req, res) => {
  const like = await Like.update(req.body, { where: { id: req.params.id } });
  res.json(like);
});

router.put('/addresses/:id', async (req, res) => {
  const address = await Address.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(address);
});

router.delete('/authors/:id', async (req, res) => {
  const author = await Author.destroy({ where: { id: req.params.id } });
  res.json(author);
});

router.delete('/posts/:id', async (req, res) => {
  const post = await Post.destroy({ where: { id: req.params.id } });
  res.json(post);
});

router.delete('/comments/:id', async (req, res) => {
  const comment = await Comment.destroy({ where: { id: req.params.id } });
  res.json(comment);
});

router.delete('/likes/:id', async (req, res) => {
  const like = await Like.destroy({ where: { id: req.params.id } });
  res.json(like);
});

router.delete('/addresses/:id', async (req, res) => {
  const address = await Address.destroy({ where: { id: req.params.id } });
  res.json(address);
});

export default router;
