import 'dotenv/config';

export default {
    db_host: process.env.DB_HOST || 'localhost',
    db_port: process.env.DB_PORT || '5432',
    db_database: process.env.DB_DATABASE || 'proffy',
    db_username: process.env.DB_USERNAME || 'postgres',
    db_password: process.env.DB_PASSWORD || '',
}
