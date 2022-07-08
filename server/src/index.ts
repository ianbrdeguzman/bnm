import express from 'express';
import cors from 'cors';
import { overviewRouter } from './routes/overview';
import { trafficRouter } from './routes/traffic';
import { performanceRouter } from './routes/performance';

const app = express();

app.use(cors());

app.use('/overview', overviewRouter);
app.use('/traffic', trafficRouter);
app.use('/performance', performanceRouter);

app.listen(4000, () => {
  console.log('Server listening at port:4000');
});
