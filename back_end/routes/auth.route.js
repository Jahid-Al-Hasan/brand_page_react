const express = require("express");
const authUser = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/api/login", authUser);
module.exports = authRouter;
