"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = require("./db/index");
const app = express_1.default();
app.use(morgan_1.default('tiny'));
app.get('/', (req, res) => {
    index_1.Transactions.findAll({ include: [index_1.Categories] })
        .then((docs) => res.send(docs))
        .catch(err => console.error(err));
});
app.get('/trans', (req, res) => {
    index_1.Transactions.findAll()
        .then((docs) => {
        res.send(docs);
    })
        .catch(err => console.error(err));
});
app.get('/cate', (req, res) => {
    index_1.Categories.findAll()
        .then((docs) => {
        res.send(docs);
    })
        .catch(err => console.error(err));
});
app.listen('5000', () => {
    console.log('Express Server is listening on 5000');
});
