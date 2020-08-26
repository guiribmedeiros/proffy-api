import config from '../../config/app';

const url = (path: string) =>
    `${config.app_protocol}://${config.app_host}:${config.app_port}${path}`;

export default url;
