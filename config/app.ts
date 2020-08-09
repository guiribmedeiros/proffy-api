import dotenv from 'dotenv';

dotenv.config();

export default {
    domain: process.env.APP_DOMAIN || 'localhost:8000',
    protocol: process.env.APP_PROTOCOL || 'http',
}
