module.exports = async (req, res, next) => {
  if(req.userData && req.userData.username && req.userData.userId){
    next();
  } else {
    res.status(401).json({ message: "Auth failed!" });
  }
};