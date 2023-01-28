const fs = require('fs');
console.log(process.env)
module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "database_sequelize",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "root",
    database: "database_sequelize",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB.USERNAME,
    password: process.env.DB.PASSWORD,
    database: process.env.DB.NAME,
    host: process.env.DB.HOST,
    port: process.env.DB.PORT,
  }
}
