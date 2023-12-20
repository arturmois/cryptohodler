import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'arturmoiscontato@gmail.com'
    && password === '123456') {
    res.sendStatus(200);
  }
  else
    res.sendStatus(401);
});

app.post('/logout', (req, res) => {
  res.sendStatus(200);
});

app.use(errorMiddleware);

export default app;
