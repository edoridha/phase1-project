'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("Courses", {
        fields: ['CourseCategoryCategoryId'],
        type: 'foreign key',
        name: 'fkey_id',
        references: {
          table: 'CourseCategories',
          field: 'id'
        }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Courses","fkey_id")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
