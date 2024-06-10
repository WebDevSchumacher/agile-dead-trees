const express = require('express');
const router = express.Router();


router.get('/reviews', async (req, res) => {
  return res.status(501).json({
    message: 'Not Implemented',
  });
});

router.post('/review', async (req, res) => {
  return res.status(501).json({
    message: 'Not Implemented',
  });
});

router.patch('/review', async (req, res) =>{
  return res.status(501).json({
    message: 'Not Implemented',
  });
});

router.delete('/review', async (req, res) =>{
  return res.status(501).json({
    message: 'Not Implemented',
  });
});

module.exports = router;
