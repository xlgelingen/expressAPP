require('dotenv').config()
module.exports = {
  client: 'mysql',
  connection: {
    // database: process.env.DB_NAME,
    // user:     process.env.DB_USER,
    // password: process.env.DB_PASS
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
};