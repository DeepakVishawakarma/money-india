const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Price = mongoose.model("Price", PriceSchema);
module.exports = Price;
