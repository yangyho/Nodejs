var express = require('express');
var router = express.Router();
var test = require('../service/test_service');

router.post('/test_Select', function(req, res) {
    var param = {
        query: req.query || null,
        body: req.body,
    };
	console.log(param)

    test.test_Select(param, function(result) {
        res.send(result);
    });
});
module.exports = router;


//console.log(req.query,req.body)  =>  {},{Id:'37'}