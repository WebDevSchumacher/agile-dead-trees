const express = require('express');
const router = express.Router();


router.get('/report', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.post('/report', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.patch('/report', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.delete('/report', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

module.exports = router;
