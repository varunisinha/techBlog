const Sequelize = require('sequelize');
const databaseConfig = require("../config/db.config.js");
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
 sequelize = new Sequelize(databaseConfig.DB, databaseConfig.user, databaseConfig.pass, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
 
});
}

module.exports = sequelize;