import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import errorMiddleware from './middlewares/errorMiddleware.js';
import { doLogin, doLogout } from './controllers/authController.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.post('/login', doLogin);

app.post('/logout', doLogout);

app.use(errorMiddleware);

export default app;
