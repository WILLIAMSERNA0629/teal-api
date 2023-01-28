{
  "development"= {
    "username": "root",
    "password": "root",
    "database": "database_sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test"= {
    "username": process.env.DB.USER,
    "password": null,
    "database": "database_sequelize",
    "host": process.env.DB.HOST,
    "dialect": "mysql"
  },
  "production"= {
    "username": process.env.DB.USER,
    "password": process.env.DB.PASSWORD,
    "database": "database_sequelize",
    "host": process.env.DB.HOST ,
    "dialect": "mysql"
  }
}