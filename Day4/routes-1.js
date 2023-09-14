// Please paste it on app.js to run the file
// or change the file directories.
const express = require("express");

const app = express();
// Here we are importing router from People
const people = require("./Day4/routes/people");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
// Here we are using use middleware which takes root route and middleware.
app.use("/api/people", people);

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
