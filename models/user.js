/* // 引用 knex
const knex = require('./../models/knex');
// 定义数据库表信息
const TABLE = 'users';

const User = {
  // 获取所有用户的方法
  all: function(){
    // 返回 Promise
    return knex.select().table(TABLE);
  },
   // 添加用户
   insert: function(params){
        return knex(TABLE).insert(params);
   },
    // 修改用户
    update: function(id, params){
        return knex(TABLE).where('id', '=', id).update(params);
    },
    // 删除用户
    delete: function(id){
        return knex(TABLE).where('id', '=', id).del();
    }
}

module.exports = User
 */




// 引用基础模型
const Base = require('./base.js');

// 定义用户模型并基础基础模型
class User extends Base {
  // 定义参数默认值为 users 表
  constructor(props = 'users') {
    super(props);
  }
}

module.exports = User