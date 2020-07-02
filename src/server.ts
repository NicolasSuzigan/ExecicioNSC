import express from 'express';
import routes from './routes';
import mongoose from './data/index';

const app = express();
const db: string = 'mongodb://localhost:27017/exercicioNSC';

mongoose(db);

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
