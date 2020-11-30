module.exports = {
  production: {
    username: 'caique',
    password: '#Gf46635095845',
    database: 'bdprojeto1sem',
    host: 'cybercafe.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
