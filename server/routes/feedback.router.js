const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    
    const query = `
    INSERT INTO "feedback" ("feeling", "feeling_comment", "understanding", "understanding_comment", "support", "support_comment", "comments")
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    pool.query(query, [
            req.body.feelings.value,
            req.body.feelings.comment,
            req.body.understanding.value,
            req.body.understanding.comment,
            req.body.supported.value,
            req.body.supported.comment,
            req.body.comments
        ])
        .then((result) => {
            console.log('POST result', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('POST error', error);
            res.sendStatus(500);
        })
});

module.exports = router;