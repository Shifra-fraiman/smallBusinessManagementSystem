import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    file: { type: 'file', filename: 'logs/server.log' },
    errorFile: { type: 'file', filename: 'logs/errors.log' },
    console: { type: 'console' },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' },
    error: { appenders: ['console', 'errorFile'], level: 'error' },
  },
});

const logger = log4js.getLogger();
const errorLogger = log4js.getLogger('error');

export { logger, errorLogger };
