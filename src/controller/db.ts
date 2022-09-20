import { connect } from 'mongoose';

import config from '../config';
import debugLogger from '../util/debugger';
import logger from '../util/logger';

const log = debugLogger('mongodb');

async function createMongodbConnection(): Promise<void> {
    log('Starting mongodb');
    const uri = config.database.mongodb.uri;
    await connect(uri);
    logger.info(`MongoDB Connected at ${uri}`);
}

export default createMongodbConnection;
