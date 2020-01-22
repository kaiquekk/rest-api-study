const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {    
    res.status(200);
    res.render('index', {title: 'Homepage', message: 'This is the homepage'});
});


module.exports = router;