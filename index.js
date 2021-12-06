const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var morgan = require("morgan");
const app = express();

// app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use(morgan());

app.listen(PORT);

//ejs
app.set("view engine", "ejs");
app.set("views", "./views_ejs");

//pug
// app.set("view engine", "pug");
// app.set("views", "./views_pug");

//Routes
app.use("/products", require("./routes/products"));
