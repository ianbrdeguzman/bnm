import express from 'express';
import { getCsvData } from '../utils/getCsvData';

export const overviewRouter = express.Router();

overviewRouter.get('/', async (req, res) => {
  const search = req.baseUrl.slice(1);
  return res.send(await getCsvData(search));
});
