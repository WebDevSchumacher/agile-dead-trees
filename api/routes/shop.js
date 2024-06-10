const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const axios = require('axios').default;

router.post('/buy', checkAuth, async (req, res, next) => {
  const url = process.env.URL_SHOP + "instantBuy/";
  const response = await axios.post(url, {
    bookID: req.body.id,
    userID: req.userData.userId
  });
  return res.status(200).json({
    message: 'ok'
  });
});

module.exports = router;
