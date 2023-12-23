var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.js');

// 引入 CSRF 中间件
var csrf = require('../middlewares/csrf.js');

var authController = require('./../controllers/auth.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/user', userController.show);
// 使用 CSRF 中间件，往页面设置 token
router.get('/user', csrf.setToken, userController.show);

router.get('/login', csrf.setToken, authController.renderLogin);

module.exports = router;