/**
 * Created by THAT'SLIFE on 2016/10/29.
 */

var express = require('express');
var router = express.Router();
var test = require('../service/test_service');

// 查
router.post('/test_Select', function(req, res) {
    var param = {
        query: req.query || null,
        body: req.body,
    };

    test.test_Select(param, function(result) {
        res.send(result);
    });
});

// 删除
router.post('/test_Delete', function(req, res) {
    var param = {
        query: req.query || null,
        body: req.body,
    };
    console.log(param)
    test.test_Delete(param, function(result) {
        res.send(result);
    });
});
module.exports = router;


//console.log(req.query,req.body)  =>  {},{Id:'37'}