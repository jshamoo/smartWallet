import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import multer from 'multer';
import { handleUpload } from './router';
import { Transactions, Categories } from './db/index';

const app = express();
app.use(morgan('tiny'));
app.use(express.static('dist/client'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
  Transactions.update(req.body, {
    where: req.params
  })
  .then(() => res.sendStatus(201))
  .catch((err) => console.error(err));
})

const upload = multer({ dest: 'dist/uploads' }).single('fin');
app.post('/api/upload', upload, handleUpload);

app.listen('5000', () => {
  console.log('Express Server is listening on 5000');
})
