'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addConstraint("Courses", {
        fields: ['CourseCategoryUserId'],
        type: 'foreign key',
        name: 'fkey',
        references: {
          table: 'CourseCategories',
          field: 'id'
        }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Courses","fkey")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
