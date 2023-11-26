const express = require("express");
const app = express();
const port = 4000;
const userRouter = require("./router/users");
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to use routes
app.use(userRouter);
// to connect DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
