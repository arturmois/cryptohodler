import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use('/', (req, res) => {
  res.send('Hello World');
});

export default app;
