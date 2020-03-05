import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello TS');
});

app.listen('4000', () => {
  console.log('Express Server is listening on 5000');
})
