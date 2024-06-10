const axios = require('axios').default;

module.exports = async (req, res, next) => {
  const url = process.env.URL_ACL + "user/verify";
  const token = req.headers.authorization.split(" ")[1];
  try {
    const response = await axios.post(url, {token})
    req.userData = response.data;
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
