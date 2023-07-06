'use strict';
const bcrypt = require('bcryptjs');
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./admin.json'))
    data = await Promise.all(
      data.map(async (e) => {
        e.createdAt = new Date()
        e.updatedAt = new Date()
        e.password = await bcrypt.hash(`${e.password}`, 10)
        return e
      })
    )
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {});

  }
}