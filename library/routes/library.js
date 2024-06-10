const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const db = require('../lib/db');
const axios = require('axios');

router
    .post('/save', async (req, res, next) => {
        console.log(req.body);
        let content = await db.libraryToDB(req.body);
        return res.status(200).json({
            message: 'saved',
            body: content
        });
    })
    .get('/', async function (req, res, next) {
        db.searchLibrary({userID: req.query.userId})
            .then(result => {
                if(result.length !== 0) {
                    const params = {ids: []}
                    result.forEach(book => params.ids.push(book.bookID));
                    const request = {
                        params: params
                    }
                    axios.get(process.env.URL_CONTENT + 'api/content/books/', request)
                        .then(resp => {
                            if (resp.status === 200) {
                                return res.status(200).json({
                                    body: resp.data.body.map(book => book.bookMeta)
                                });
                            }
                        })
                        .catch(() => console.log("Something went wrong requesting Content:"))
                } else {
                    return res.status(200).json({
                        message: "No books bought"
                    })
                }
            })
            .catch(err => console.log("Something went wrong didn't get response from DB: ", err));
    });

module.exports = router;
