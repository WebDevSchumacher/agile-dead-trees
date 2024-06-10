const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../lib/db');


const router = express.Router();

router.post("/signup", async (req, res, next) => {
    console.log(req.body);
    const hash = await bcrypt.hash(req.body.password, 10)
    const user = await db.userToDB(req.body.username, hash);
    if (user) {
        return res.status(201).json({
            success: true,
            message: "User created!"
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Creation failed"
        });
    }

});

router.post("/login", async (req, res, next) => {
    const userId = await db.userAuth(req.body.username, req.body.password);
    if (!userId) {
        return res.status(401).json({
            success: false,
            message: "Auth failed"
        });
    }
    const token = jwt.sign(
        {username: req.body.username, userId},
        process.env.JWT_SECRET,
        {expiresIn: "24h"}
    );
    return res.status(200).json({
        success: true,
        token,
        expiresIn: 3600 * 24,
        userId
    });
});

router.post("/verify", async (req, res, next) => {
    try {
        const decodedToken = jwt.verify(req.body.token, process.env.JWT_SECRET);
        return res.status(200).json({username: decodedToken.username, userId: decodedToken.userId});
    } catch (error) {
        return res.status(401).json({message: "Auth failed!"});
    }
});

router.get("/", async (req, res, next) => {
    return res.status(200).json({message: "qweasd"});
});
module.exports = router;
