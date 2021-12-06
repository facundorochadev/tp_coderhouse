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

app.set('port', (process.env.PORT || 4000));

//Start Server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//ejs
// app.set("view engine", "ejs");
// app.set("views", "./views_ejs");

//pug
app.set("view engine", "pug");
app.set("views", "./views_pug");

//Routes
app.use("/products", require("./routes/products"));
