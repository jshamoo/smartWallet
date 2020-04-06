import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

export function handleUpload(req: Request, res: Response) {
  if (!req.file) return res.sendStatus(500);
  const filePath = path.join(__dirname, 'uploads', req.file.filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
      res.sendStatus(500);
    } else {
      const transactions = convert(data);
      res.send(JSON.stringify(transactions))
    }
  })
};

/** TO Do: save the uploaded file to database fo the authorized user */

export function convert(csv: string): Array<object> {
  const regexR = /\r/g;
  const regexN = /\n/g;
  const endIndexOfFirstLine = csv.indexOf('\n');

  const keys = csv
    .slice(0, endIndexOfFirstLine)
    .replace(regexR, '')
    .split(',');

  const content = csv
    .slice(endIndexOfFirstLine + 1)
    .replace(regexR, '')
    .replace(regexN, ',')
    .split(',');


  const transactionArr = [];
  let record: {[index: string]: string} = {};
  for(let i = 0; i < content.length; i++) {
    let idx = i % (keys.length);

    record[keys[idx]] = content[i];
    if (idx === keys.length - 1) {
      transactionArr.push(record);
      record = {}
    }
  }

  return transactionArr;
}
