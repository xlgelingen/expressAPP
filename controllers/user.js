// 引用用户模版数据
const UserModel = require('./../models/user.js');
const User = new UserModel();
// const User = require('./../models/user.js');
const xss = require('xss');

const userController = {
    // show 获取用户数据并返回到页面
    show: async function (req, res, next) {
        // 如果用户没有登录，重定向到登录页面
        if (!res.locals.isLogin) {
            res.redirect('/login')
            return
        }

        try {
            // 从模型中获取所有用户数据
            const users = await User.all();
            // 把用户数据设置到 res.locals 中
            res.locals.users = users;
            // 渲染到 views 视图目录的 user/show.tpl 路径中。
            res.render('user/show.tpl', res.locals)
        } catch (e) {
            res.locals.error = e;
            res.render('error', res.locals)
        }

        console.log(res.locals);

    },

    // 新增用户 API
    insert: async function (req, res, next) {
        //xss过滤
        let name = xss(req.body.name);
        let email = xss(req.body.email);
        let password = xss(req.body.password);
        console.log(name, email, password);
        if (!name || !email || !password) {
            res.json({ code: 0, data: 'params empty!' });
            return
        }

        try {
            const users = await User.insert({ name, email, password });
            res.json({ code: 200, data: users });
        } catch (e) {
            res.json({ code: 0, data: e });
        }
    },

    // 更新用户信息 API
    update: async function (req, res, next) {
        let id = req.body.id;
        //xss过滤
        let name = xss(req.body.name);
        console.log(id, name);

        if (!name || !id) {
            res.json({ code: 0, data: 'params empty!' });
            return
        }

        try {
            const user = await User.update(id, { name });
            res.json({ code: 200, data: user })
        } catch (e) {
            res.json({ code: 0, data: e })
        }
    },

    // 删除用户 API
    delete: async function (req, res, next) {
        let id = req.body.id;
        if (!id) {
            res.json({ code: 0, data: 'params empty!' });
            return
        }

        try {
            const user = await User.delete(id);
            res.json({ code: 200, data: user })
        } catch (e) {
            res.json({ code: 0, data: e })
        }
    }
}

module.exports = userController;
