// connect to model and upload data
const User = require("../models/user.schema.jsx");

const registerUser = async (req, res) => {
  // console.log(req.body);
  try {
    // check email already exists or not
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).json("Already have an account with this email");
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(newUser);
      await newUser.save();
      if (newUser) {
        res.status(200).json("Data received");
      } else {
        res.json("data not receives");
      }
    }
  } catch (error) {
    throw error;
  }
};

module.exports = registerUser;
