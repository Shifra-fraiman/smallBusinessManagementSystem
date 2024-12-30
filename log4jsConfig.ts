import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    file: { type: 'file', filename: 'logs/server.log' },
    errorFile: { type: 'file', filename: 'logs/errors.log' },
    testsFile: { type: 'file', filename: 'logs/tests.log' }, // New appender for tests
    console: { type: 'console' },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' },
    error: { appenders: ['console', 'errorFile'], level: 'error' },
    tests: { appenders: ['console', 'testsFile'], level: 'info' }, // New category for tests
  },
});

const logger = log4js.getLogger();
const errorLogger = log4js.getLogger('error');
const testsLogger = log4js.getLogger('tests'); // Logger for tests

export { logger, errorLogger, testsLogger }; // Export the tests logger
