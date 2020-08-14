const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Listening on port ", PORT));
