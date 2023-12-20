const axios = require('axios');
// 定义接口/秘钥
const ISBNAPI = 'https://isbn.market.alicloudapi.com/ISBN';
// const APPCODE = 'f3ed31a8486c457984dea8e591e786fe';
const APPCODE = process.env.ALIYUN_APP_CODE;

const isbnModel = {
    isbn: function (isbn) {
        return axios.get(ISBNAPI, {
            params: { isbn: isbn },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `APPCODE ${APPCODE}`,
            },
        })
    }
}

module.exports = isbnModel;