// 引用路由
var express = require('express');
var router = express.Router();

// 引用书控制器
var bookController  = require('../controllers/book');


// 设置路由地址, /isbn 代表的意思是如果在浏览器中打开 /api/isbn 地址，将会触发的回调。
// req 参数存放请求体的内容，例如我们可以在这拿到浏览器发来的各类信息。
// res 参数存放返回体的内容，例如返回数据的类型、内容。
// next 代表着执行下一个回调的时机。

/* GET users listing. */
router.get('/isbn', bookController.info);

module.exports = router;
