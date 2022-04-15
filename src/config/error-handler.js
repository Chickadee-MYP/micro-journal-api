import logger from './logger.js';

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  logger.log({
    level: 'error',
    message: error.message,
  });

  res.status(error.status || 500);

  res.format({
    json: () => res.json({ message: error.message }),
    default: () => res.type('txt').send(error.message),
  });
};

export default errorHandler;
