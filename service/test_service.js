// service层
var err = require("../dao/db/err.js");
var errObj = err.InitErr();

var test = require("../dao/test_Dao.js");
exports.test_Select = function(param, callback) {
    var data = param.body || param.query || null;

    var result = new Object();
    if (!data) {
        result = errObj.dataLose;
        callback && callback(result);
    } else {
        test.test_Select(data, function(result) {
            callback && callback(result);
        });
    }
}

exports.test_Delete = function(param, callback) {
    var data = param.body || param.query || null;

    var result = new Object();
    if (!data) {
        result = errObj.dataLose;
        callback && callback(result);
    } else {
        test.test_Delete(data, function(result) {
            callback && callback(result);
        });
    }
}
