'use strict';
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data/profiles.json', 'utf-8'))
          .map((e) => {
            e.createdAt = new Date();
            e.updatedAt = new Date();
            return e
          })
console.log(data)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Profiles",data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profiles", null)
  }
};
