const User = require("../models/user.schema.jsx");
const authUser = async (req, res) => {
  console.log(req.body);
  //   res.send("You are logged in");
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    try {
      if (
        user.email === req.body.email &&
        user.password === req.body.password
      ) {
        res.status(200).json("You are logged in");
        console.log("you are logged in");
      } else {
        res.status(401).json("Unauthorized");
        console.log("Unauthorized");
      }
    } catch (error) {
      throw error;
    }
  } else {
    res.status(401).json("Email not found");
    console.log("Email not found");
  }
};

module.exports = authUser;
