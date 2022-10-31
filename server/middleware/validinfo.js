module.exports = (req, res, next) => {
  const { email, name, password } = req.body;

  function validEmail(userEmail) {
    return /\S+@\S+\.\S+/.test(userEmail);
  }

  if (req.path === '/register') {
    if (![email, name, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    } else if (!validEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(401).json('Missing Credentials');
    } else if (!validEmail(email)) {
      return res.status(401).json('Invalid Email');
    }
  }
  next();
};