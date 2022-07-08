import fsPromise from 'fs/promises';
import csv from 'csvtojson';
import { transpose } from 'csv-transpose';

export async function getCsvData(search: string) {
  const rawData = await fsPromise.readFile(__dirname + '/data.csv', {
    encoding: 'utf8'
  });
  const tranposedData = transpose(rawData, ',');
  const data = await csv().fromString(tranposedData);

  return search === 'overview'
    ? data.slice(0, 4)
    : search === 'traffic'
    ? data.slice(4, 8)
    : data.slice(8, 12);
}
