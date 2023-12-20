const isbnModel = require('../models/isbn')

const book = {
    info: async function(req, res, next) {
        // 从参数中获取 ISBN 编码
        const ISBN = req.query.isbn;
        try {
            //使用axios库发起HTTP GET请求，向指定的ISBN查询API发送请求。参数中包括ISBN参数和授权头信息。
            const bookRequest = await isbnModel.isbn(ISBN);
            // 成功获取书籍信息时，返回JSON响应，包含状态码200和书籍信息
            res.json({ code: 200, data: bookRequest.data });
        } catch (e) {
            // 请求出错时，返回JSON响应，包含状态码100和错误信息
            res.json({ code: 100, data: e });
        }
    }
}

module.exports = book;