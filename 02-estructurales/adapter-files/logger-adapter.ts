import { Logger } from '@deno-library/logger';

const logger: Logger = new Logger();

logger.info('Application started successfully.');
logger.warn('Memory usage is high.');
logger.error('Database connection error.');

