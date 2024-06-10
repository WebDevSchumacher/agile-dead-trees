const express = require("express");
const axios = require('axios').default;

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const url = process.env.URL_ACL + "user/signup";
  const response = await axios.post(url, req.body);
  return res.status(response.data.success ? 201 : 401).json(response.data);
});

router.post("/login", async (req, res, next) => {
  const url = process.env.URL_ACL + "user/login";
  const response = await axios.post(url, req.body);
  return res.status(response.data.success ? 201 : 401).json(response.data);
});

module.exports = router;
