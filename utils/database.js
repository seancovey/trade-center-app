const Sequelize = require('sequelize');

const sequelize = new Sequelize('trade-center-app', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;