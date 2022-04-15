import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import { morganMiddleware } from './config/logger.js';
import initializeDb from './config/initialize-db.js';
import './auth/auth.js';
import routes from './routes.js';

await initializeDb();

const app = express();
app.set('trust proxy', process.env.NUM_OF_PROXIES);
// app.get('/ip', (req, res) => res.send(req.ip));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", 'cdn.jsdelivr.net'],
        'img-src': '*',
      },
    },
  })
);
app.use(cors({ credentials: true }));
app.use(
  rateLimit({
    max: parseInt(process.env.RATE_LIMIT, 10),
    windowMs: 5 * 60 * 1000,
  })
);
app.use(compression());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(favicon('./src/public/img/favicon/favicon.ico'));
app.use('/static', express.static('./src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morganMiddleware);

app.use('/', routes);

export default app;
