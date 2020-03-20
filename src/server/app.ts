import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Transactions, Categories } from './db/index';

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('dist/client'));

app.get('/api', (req, res) => {
  Transactions.findAll({include: [Categories]})
    .then((docs) => res.send(docs))
    .catch(err => console.error(err))
});

app.get('/api/trans', (req, res) => {
  Transactions.findAll()
    .then((docs) => {
      res.send(docs);
    })
    .catch(err => console.error(err))
})

app.get('/api/cate', (req, res) => {
  Categories.findAll()
    .then((docs) => {
      res.send(docs);
    })
    .catch(err => console.error(err))
})

app.patch('/api/trans/:id', (req, res) => {
  console.log( req.params, req.body);
  Transactions.update(req.body, {
    where: req.params
  })
    .then(() => res.sendStatus(201))
    .catch((err) => console.error(err));
})

app.listen('5000', () => {
  console.log('Express Server is listening on 5000');
})
