import express from 'express';
import errorHandler from './config/error-handler.js';
import authRoutes from './auth/auth.routes.js';
import apiV1Routes from './api/api.v1.routes.js';
import apiV2Routes from './api/api.v2.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/api/v1', apiV1Routes);
router.use('/api/v2', apiV2Routes);

router.use(errorHandler);

export default router;
