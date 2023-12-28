import express from 'express';
import 'express-async-errors';

import authMiddleware from './middlewares/authMiddleware.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import { doLogin, doLogout } from './controllers/authController.js';
import { getSettings } from './controllers/settingsController.js';

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.post('/login', doLogin);

app.get('/settings', authMiddleware, getSettings);

app.post('/logout', doLogout);

app.use(errorMiddleware);

export default app;
