'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Courses", "CourseCategoryUserId",Sequelize.INTEGER)
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.remove("Courses", "CourseCategoryUserId")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
