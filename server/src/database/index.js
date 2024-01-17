const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Menu = require('../models/Menu')

try {
    const connection = new Sequelize(dbConfig);
    
    User.init(connection);
    Restaurant.init(connection);
    Menu.init(connection);
    Menu.associate(connection.models);
    
    console.log('Conected to database')
    module.exports = connection;
} catch (error) {
    console.log('Error conection database -> ' + error)
}
