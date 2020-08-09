import path from 'path';
import fs from 'fs';

import config from './config/database';

// Creates the storage directory if doesn't exist
const dir = path.resolve(__dirname, 'storage');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Configures the database
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'storage', config.db_database),
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations'),
    },
    useNullAsDefault: true,
};
