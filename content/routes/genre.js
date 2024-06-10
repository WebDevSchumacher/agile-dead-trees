const express = require('express');
const router = express.Router();


router.get('/genres', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.post('/genre', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.patch('/genre', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.delete('/genre', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

module.exports = router;
