const express = require('express')
const Products = require('./products.js')
const products = new Products()
const app = express()
const port = 3000

app.listen(port, () => console.log(`listening on port ${port}!`))

app.get('/productos', (req, res) => res.send(products.getAll()))
app.get('/productosRandom', (req, res) => res.send(products.getRandom()))