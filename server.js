const mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const URI =
  "mongodb+srv://admin:admin@instantmoney.5ny1t.mongodb.net/InstantMoney?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const price = require("./priceRoute");
app.use("/", price);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
