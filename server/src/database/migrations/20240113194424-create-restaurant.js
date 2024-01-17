'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurants', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      food_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stars: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      delivery_time: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      delivery_value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('restaurants');
  }
};
