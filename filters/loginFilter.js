const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {

    res.locals.isLogin = false;
    res.locals.userInfo = {};

    // 判断是否存在ac cookie
    let token = req.cookies.web_token;
    if (token) {
        // 如果有，对其进行解密
        JWT.verify(token, JWT_SECRET, function (err, decoded) {
            if (!err) {
                res.locals.isLogin = true;
                res.locals.userInfo = {
                    id: decoded.user_id
                }
                next();
            }
        });
    } else {
        next();
    }
    // next();
}

// module.exports = function (req, res, next) {

//   res.locals.isLogin = false;
//   res.locals.userInfo = {};
  
//   // 判断是否存在ac cookie
//   let token = req.cookies.web_token;
//   if(token){
//     // 如果有，对其进行解密
//     JWT.verify(token, JWT_SECRET, function(err, decoded) {
//       if(!err) {
//         res.locals.isLogin = true;
//         res.locals.userInfo = {
//           id: decoded.user_id
//         }
//       }
//       next();
//     });
//   }else {
//     next();
//   }
// }