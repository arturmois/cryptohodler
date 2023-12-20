import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorMiddleware);

export default app;
