var err = require("./db/err.js");
var sql = require("./db/dbapi.js");

var dbapi  = sql.dbapi();
var errObj = err.InitErr();
var sqlObj = sql.dbapi();


// 查
exports.test_Select = function(param,callback){
	var pagenum = parseInt(param.num) || 0;
	var Id = param.Id || null;

	var result = new Object(); 
	var sql = "SELECT * FROM developer limit " + pagenum * 10 + ",10";
	if(Id)
		sql = "SELECT * FROM developer where Id = " + Id + " limit " + pagenum * 10 + ",10";
	
	dbapi.sqlQuery(sql,function(data,err){
		result.aaData = data.aaData;
		sql = "select count(1) as count from developer";
			if(Id)
				sql = "select count(1) as count from developer where Id = " + Id;
			dbapi.sqlQuery(sql,function(data2,err){
				result.page = data2.aaData;
				result.err = errObj.success;
				callback && callback(result);
			});
	});
}

// 删
exports.test_Delete = function(param,callback){
	var pagenum = parseInt(param.num) || 0;
	var Id = param.Id || null;
	
	var result = new Object(); 
	var sql = 'DELETE FROM developer WHERE Id =' + Id
	
	
	dbapi.sqlQuery(sql,function(data,err){
		result.aaData = data.aaData;
	});
}
// exports.test_Delete