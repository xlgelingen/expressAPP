// 注册app的过滤器
module.exports = function(app) {
    //告诉 Express 在每个请求处理过程中都执行这些中间件。因为没有设置path
    app.use(require('./loginFilter.js'));
    app.use(require('./initFilter.js'))
  };