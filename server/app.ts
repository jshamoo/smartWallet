import express from 'express';
import morgan from 'morgan';
import { Transactions, Categories } from './db/index';
import { readSync } from 'fs';

const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  Transactions.findAll({include: [Categories]})
    .then((docs) => res.send(docs))
    .catch(err => console.error(err))
});

app.get('/trans', (req, res) => {
  Transactions.findAll()
    .then((docs) => {
      res.send(docs);
    })
    .catch(err => console.error(err))
})

app.get('/cate', (req, res) => {
  Categories.findAll()
    .then((docs) => {
      res.send(docs);
    })
    .catch(err => console.error(err))
})

app.listen('5000', () => {
  console.log('Express Server is listening on 5000');
})
