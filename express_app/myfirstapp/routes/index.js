var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/nodeapp', function(req, res ,next) {
    data = "Data from router";	 
   res.render('firstview' ,{ Harish : 'Harish Yadav' , NodeJS : 'My first node js express app',data}); 
});


module.exports = router;
