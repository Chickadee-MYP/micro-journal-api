import express from 'express';
// import redirectToLogin from './api/auth/redirect-to-login.js';
// import { notFound, errorHandler } from './config/error/error-handling.js';
// import authRoutes from './api/auth/auth.routes.js';
import apiRoutes from './api/api.routes.js';
// // import webRoutes from './web.routes.js';

const router = express.Router();

// router.use('/auth', authRoutes);
// router.use(redirectToLogin);
router.use('/api', apiRoutes);
// router.use('/', webRoutes);

// router.use(notFound);
// router.use(errorHandler);

export default router;
