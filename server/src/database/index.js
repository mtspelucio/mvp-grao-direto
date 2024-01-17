const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Menu = require('../models/Menu')

const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurant.init(connection);
Menu.init(connection);
Menu.associate(connection.models);

module.exports = connection;