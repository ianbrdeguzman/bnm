import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.send({
    message: 'Hello World'
  });
});

app.listen(4000, () => {
  console.log('Server listening at port:4000');
});
