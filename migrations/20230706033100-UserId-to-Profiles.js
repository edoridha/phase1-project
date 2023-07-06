'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Profiles', 'UserId', Sequelize.INTEGER)

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Profiles', 'UserId')

  }
};
