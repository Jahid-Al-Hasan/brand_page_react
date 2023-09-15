const express = require("express");
const registerUser = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/api/register", registerUser);
module.exports = userRouter;
