'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("CourseCategories", {
        fields: ['CourseId'],
        type: 'foreign key',
        name: 'fkey_course_id',
        references: {
          table: 'Courses',
          field: 'id'
        }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("CourseCategoies","fkey_course_id")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
