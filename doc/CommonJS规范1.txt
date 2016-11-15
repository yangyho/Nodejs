CommonJS规范

1. 概述

Node程序由许多个模块组成，每个模块就是一个文件。Node模块采用了CommonJS规范。

根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的。

//example.js
var x = 5;
var addX = function(value) {
	return value + x;
}
在上述代码中,变量x和addX, 是当前文件example.js私有的,其他文件不可见的.
如果想在多个文件中共享变量,可以使用:
global.warning = true;
上面代码的warning变量,可以被所有文件读取,当然,这种写法是不推荐使用的.

CommonJS规定,每个文件的对外接口是module.exports对象.这个对象的所有属性和方法,都可以被其他文件导入.
var x = 5;
var addX = function(value)_ {
	return value + x;
}
module.exports.x = x;
module.exports.addX = addX;
上面代码通过module.exports对象,定义对外接口,输出变量x和函数addX.module.exports对象是可以被其他文件导入的,它其实就是文件内部和外部通信的桥梁.
//test.js
var example = require("./example");
console.log(example.x);
console.log(example.addX(10));

2. module对象
每个模块内部,都有一个module对象,代表当前模块.它有以下属性:
module.id: 模块的标识符,通常是带有绝对路径的模块文件名;
module.filename: 模块的文件名,带有绝对路径;
module.loaded: 返回一个布尔值,表示模块是否已经完成加载;
module.parent: 返回一个对象,表示调用该模块的模块;
module.children: 返回一个数组,表示该模块要用到的其他模块; 

3. module.exports属性
module.exports属性表示当前模块对外输出的接口,其他文件加载该模块时,实际就是读取module.exports变量

4. exports变量
为了方便,Node为每个模块提供了一个exports变量,指向module.exports,这等同于每个模块头部,都有这样一句:
var exports = module.exports;

5. AMD规范与commonjs规范的兼容性:
CommonJS规范加载模块是同步的, 也就是说,只有加载完成, 才能执行后面的操作.AMD规范则是非同步加载模块,允许指定回调函数.由于NODEJS主要用于服务器编程,模块文件一般都已经存放在本地,所以加载起来比较快,不用考虑非同步的加载方式,所以commonjs规范比较适用.但是,如果是浏览器环境,要从服务器端加载模块,这时就必须采用非同步模式, 因此浏览器端一般采用AMD规范.

6. require用法:
require的基本功能是,读入并执行一个JAVASCRIPT文件,然后返回该模块的exports对象,如果没有发现指定模块,会报错.

模块的缓存: 第一次加载某个模块时,node会缓存该模块,以后再加载该模块,就直接从缓存取出该模块的exports属性;
