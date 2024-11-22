  const route = require("express").Router();
  const {login,register} = require("../controllers/auth");
  const { protect } = require("../middlewares/authMiddleware");
  
  //Login && Registeration
  route.post("/login", login);
  route.post("/register", register);
  route.put("/", protect, upload.single("profileImg"), updateProfile);
  
  module.exports = route;
  