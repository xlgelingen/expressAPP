// 引用用户模版数据
const UserModel = require('./../models/user.js');
const User = new UserModel();
// const User = require('./../models/user.js');

const userController = {
    // show 获取用户数据并返回到页面
    show: async function (req, res, next) {
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
    },

    // 新增用户 API
    insert: async function (req, res, next) {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
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
        let name = req.body.name;
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
