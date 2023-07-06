'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Courses", "CourseCategoryId", Sequelize.INTEGER)
    await queryInterface.addConstraint("Courses", {
        fields: ['CourseCategoryId'],
        type: 'foreign key',
        name: 'fkey_course',
        references: {
          table: 'CourseCategories',
          field: 'id'
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Courses', 'CourseCategoryId')
  }
};
