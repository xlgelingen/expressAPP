var express = require('express');
var router = express.Router();
// 引用路由
var axios = require('axios')


// 设置路由地址, /isbn 代表的意思是如果在浏览器中打开 /api/isbn 地址，将会触发的回调。
// req 参数存放请求体的内容，例如我们可以在这拿到浏览器发来的各类信息。
// res 参数存放返回体的内容，例如返回数据的类型、内容。
// next 代表着执行下一个回调的时机。

/* GET users listing. */
router.get('/isbn', async function (req, res, next) {
  // 定义接口/秘钥
  const ISBNAPI = 'https://isbn.market.alicloudapi.com/ISBN';
  // const APPCODE = 'f3ed31a8486c457984dea8e591e786fe';
  const APPCODE =  process.env.ALIYUN_APP_CODE;

  // 从参数中获取 ISBN 编码
  const ISBN = req.query.isbn;
  try {
    //使用axios库发起HTTP GET请求，向指定的ISBN查询API发送请求。参数中包括ISBN参数和授权头信息。
    const bookRequest = await axios.get(ISBNAPI, {
      params: {
        "isbn": ISBN, // 将ISBN作为查询参数传递
      },
      headers: {
        'Content-Type': 'application/json',//指定请求的内容类型为 JSON 格式。
        'Authorization': `APPCODE ${APPCODE}`// 使用AppCode进行身份验证
      }
    });
    // 成功获取书籍信息时，返回JSON响应，包含状态码200和书籍信息
    res.json({ code: 200, data: bookRequest.data });
  } catch (e) {
    // 请求出错时，返回JSON响应，包含状态码100和错误信息
    res.json({ code: 100, data: e });
  }
  // res.send('respond with a resource');
});

module.exports = router;
