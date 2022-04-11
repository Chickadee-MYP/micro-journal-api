// import express from 'express';
// import Author from './author.model.js';

// const router = express.Router();

// router.get('/', async (req, res) => {
//   const authors = await Author.findAll();
//   console.log(authors);
//   res.json(authors);
// });

// export default router;

import restFactory from '../../utils/rest-route.factory.js';
import Author from './author.model.js';

export default await restFactory(Author);
