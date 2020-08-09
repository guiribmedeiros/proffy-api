import express from 'express';

import ClassController from '../app/controllers/ClassController';
import ConnectionController from '../app/controllers/ConnectionController';

const routes = express.Router();
const classController = new ClassController();
const connectionsController = new ConnectionController();

// Classes
routes.get('/classes', classController.index);
routes.post('/classes', classController.create);

// Connections
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
