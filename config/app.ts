import 'dotenv/config';

export default {
    app_host: process.env.APP_HOST || 'localhost',
    app_port: process.env.APP_PORT || 8000,
    app_protocol: process.env.APP_PROTOCOL || 'http',
}
