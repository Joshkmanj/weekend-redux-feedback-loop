const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST request recieved', req.body);
    
    let data = req.body
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText,[data.feeling, data.understanding, data.support, data.comments])
    .then(response =>{
        console.log('Great success!', response);
        res.sendStatus(200)
    }).catch(error=>{
        console.log('Great failure!', error);
        res.sendStatus(500)
    })
})

module.exports = router;