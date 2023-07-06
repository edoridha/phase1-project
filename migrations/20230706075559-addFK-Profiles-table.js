'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Profiles', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_user_id',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.removeConstraint('Profiles', 'fkey_user_id')
  }
};
