const express = require('express');
const cors = require('cors');
var morgan = require('morgan')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan())
app.set('view engine', 'html');
 
app.listen(8080);


//Routes
app.use('/api/products', require('./routes/products')); 