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
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME || "database_sequelize",
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    dialect: 'mysql'
  }
}
