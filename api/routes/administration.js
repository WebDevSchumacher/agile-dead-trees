const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

router.post('/save', checkAuth, async (req, res, next) => {
  return res.status(200).json({
    message: 'ok'
  });
});

module.exports = router;
