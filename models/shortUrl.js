const mongoose = require("mongoose");
const shortId = require("shortid"); // lib to help us generate short URL

// create a schema
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

// this hooks up our DB and our actual model.
// now we can affect our DB from within our model
module.exports = mongoose.model("ShortUrl", shortUrlSchema);
