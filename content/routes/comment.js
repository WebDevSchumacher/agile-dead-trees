const express = require('express');
const router = express.Router();


router.get('/comments', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.get('/comment', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.post('/comment', async (req, res) => {
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.patch('/comment', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.delete('/comment', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

module.exports = router;
