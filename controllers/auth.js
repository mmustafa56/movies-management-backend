const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { createToken } = require("../utils/token");

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found.",
    });
  }

  const isMatch = await bcryptjs.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Password is mismatch", 
    });
  }
  if (user?.isEnable === false) {
    return res.status(404).json({
      success: false,
      message: "User is not enable.", 
    });
  }

  const token = createToken({ userId: user._id, email: user.email }); 
  user = user.toObject();
  delete user.password;
  return res.status(201).json({
    success: true,
    message: "User successfully logged In ",
    token,
    user,
  });
};

//Registeration
const register = async (req, res) => {
  const { name, password, email, city,  country } = req.body; 
  const user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({
      success: false,
      message: "User is already register!",
    });
  }
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);

  const create_User = new User({
    name,
    email,
    password: hash,
    address:{
      city,
      country
    },
  });

  const createUser = await create_User.save();
  if (createUser) {
    const token = createToken({
      userId: createUser._id,
      email: createUser.email,
    }); 
    let userData = createUser.toObject();
    delete userData.password;
    return res.status(200).json({
      user: userData,
      token,
      message: "user successfully register",
      success: true,
    });
  }
  return res.status(404).json("Invalid user data");
};



module.exports = {login,register};
