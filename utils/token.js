const jwt = require("jsonwebtoken");

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "24h", 
  });
  return token;
};

const verifyToken = () => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { createToken, verifyToken };
