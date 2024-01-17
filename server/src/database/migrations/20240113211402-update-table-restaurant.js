'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameTable('restaurant', 'restaurants')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameTable('restaurants', 'restaurant')

  }
};
