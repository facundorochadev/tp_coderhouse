const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var morgan = require("morgan");
const app = express();

// app.use(express.urlencoded({ extended: true }));
 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use(morgan());

const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
// ejs
app.set("view engine", "ejs");
app.set("views", "./views_ejs");

//pug
// app.set("view engine", "pug");
// app.set("views", "./views_pug");

//Routes
app.use("/products", require("./routes/products"));
