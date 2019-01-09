const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routes/CoinRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(port, function(){
  console.log('Node is connecting in port',port);
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });
app.use('/coins', CoinRouter);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/expressdemo');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
