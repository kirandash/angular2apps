var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	//res.send('INDEX'); // To write the content directly on index
	res.render('index'); // renders content from index.ejs file from views folder
});

module.exports = router;