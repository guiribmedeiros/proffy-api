import express from 'express';
import cors from 'cors';

import routes from '../routes/api';

// Creates the application
const app = express();

// Configures the application
app.use(cors());
app.use(express.json());

// Routes the application
app.use(routes);

// Binds the application
app.listen(8000);
