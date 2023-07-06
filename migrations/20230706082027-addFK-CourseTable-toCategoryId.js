'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Courses', {
      fields: ['CategoryId'],
      type: 'foreign key',
      name: 'fkey_category_id',
      references: {
        table: 'Categories',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.removeConstraint('Courses', 'fkey_category_id')
  }
};
