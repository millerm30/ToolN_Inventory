const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    //Get token from the header
    const jwtToken = req.header('token');

    //Check if not token
    if (!jwtToken) {
      return res.status(403).json('Not Authorized');
    }

    //Verify token
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    //Get user from the payload
    req.user = payload.user;
    next();

  } catch (err) {
    res.status(403).json('Not Authorized');
  }
}