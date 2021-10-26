const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./modals/students");
const port = process.env.PORT || 8000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server side by ");
});
app.post("/student", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user.save().then(() => {
    res.send(user);
  });
  res.send("Hello from the other side");
});
app.listen(port, () => {
  console.log(`connection is succefull at ${port}`);
});
