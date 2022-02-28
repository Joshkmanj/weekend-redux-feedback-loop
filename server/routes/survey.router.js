const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST request recieved', req.body);
    res.sendStatus(200)
})

module.exports = router;