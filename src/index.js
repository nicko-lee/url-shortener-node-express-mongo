const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./../models/shortUrl"); // import the model we created
const app = express();

// connect to DB & pass it some setup options
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set("view engine", "ejs");
// tell our app we are using URL parameters
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  // retrieves all our URLs in our DB
  // it needs to be an async function so we can use "await"
  const shortUrls = await ShortUrl.find();

  // pass the shortUrls down into our view template
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  // connect to DB and save a new short URL based on the DB schema object we defined
  // note this is an async action. It happens in the background
  // we want to wait until this is executed before we move on hence the asycn await syntax
  // to create an async function
  await ShortUrl.create({ full: req.body.fullUrl }); // saves an entry to DB
  res.redirect("/");
});

app.get("/test", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Listening on port ", PORT));
