import path from 'path';

import config from './config/database';

// Configures the database
module.exports = {
    client: 'pg',
    connection: {
        host: config.db_host,
        port: config.db_port,
        database: config.db_database,
        user: config.db_username,
        password: config.db_password,
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations'),
    },
    useNullAsDefault: true,
};
