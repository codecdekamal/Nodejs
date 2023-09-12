const express = require("express");
const app = express();
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  let time = new Date();
  time = time.getFullYear();
  console.log(method, url, time);
  next(logger2());
};
const logger2 = (req, res, next) => {
  console.log("I am the second 1");
};
//   A route will match any path that follows its path immediately with a “/”. 
// For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.
app.use(logger);
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.listen(5000, () => {
  console.log("Listening on port 5000");
});