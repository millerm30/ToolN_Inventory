const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    //1. Get token from the header
    const jwtToken = req.header('token');
    //2. Check if not token
    if (!jwtToken) {
      return res.status(403).json('Not Authorized');
    }
    //3. Verify token
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    //4. Get user from the payload
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(403).json('Not Authorized');
  }
}