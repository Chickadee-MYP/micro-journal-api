import logger from '../logger.js';

export const notFound = (req, res) => {
  res.status(404);

  res.format({
    html: () => res.render('config/error/404', { url: req.url }),
    json: () => res.json({ error: 'Not found' }),
    default: () => res.type('txt').send('Not found'),
  });
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (error, req, res, next) => {
  logger.log({
    level: 'error',
    message: error.message,
  });

  res.status(error.status || 500);

  res.format({
    html: () => res.render('config/error/error', { message: error.message }),
    json: () => res.json({ message: error.message }),
    default: () => res.type('txt').send(error.message),
  });
};

export default { notFound, errorHandler };
