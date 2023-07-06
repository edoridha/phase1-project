'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Courses", "UserId")
    await queryInterface.removeColumn("Courses","CategoryId")
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn("Courses", "UserId", Sequelize.INTEGER)
    await queryInterface.addConstraint('Courses', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_user_id',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
    await queryInterface.addColumn("Courses", "CategoryId", Sequelize.INTEGER)
        await queryInterface.addConstraint('Courses', {
      fields: ['CategoryId'],
      type: 'foreign key',
      name: 'fkey_category_id',
      references: {
        table: 'Categories',
        field: 'id'
      }
    });
  }
};
