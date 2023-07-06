'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Courses","CourseCategoryCategoryId", Sequelize.INTEGER)
    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.removeColumn("Courses","CourseCategoryCategoryId" )
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
