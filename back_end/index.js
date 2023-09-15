const express = require("express");
const app = express();
const userRouter = require("./routes/users.route.js");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.route.js");
require("dotenv").config();
const port = process.env.PORT;

// Connect with mongodb local server
const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json("welcome to node server");
});

app.use(authRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
  ConnectDb();
});
