import express from 'express';
// import redirectToLogin from './api/auth/redirect-to-login.js';
// import { notFound, errorHandler } from './config/error/error-handling.js';
// import authRoutes from './api/auth/auth.routes.js';
import apiV1Routes from './api.v1.routes.js';
import apiV2Routes from './api/api.routes.js';
// // import webRoutes from './web.routes.js';

const router = express.Router();

// router.use('/auth', authRoutes);
// router.use(redirectToLogin);
router.use('/api/v1', apiV1Routes);
router.use('/api/v2', apiV2Routes);
// router.use('/', webRoutes);

// router.use(notFound);
// router.use(errorHandler);

export default router;
