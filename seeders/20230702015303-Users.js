'use strict';
const bcrypt = require('bcryptjs');
const fs = require('fs')
const admin = JSON.parse(fs.readFileSync('./data/admin.json', 'utf-8'))
      admin.map( (e) => {
          e.createdAt = new Date()
          e.updatedAt = new Date()
          e.password =  bcrypt.hashSync(`${e.password}`, 10)
          return e
      })

      const data = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))
      data.map( (e) => {
          e.createdAt = new Date()
          e.updatedAt = new Date()
          e.password =  bcrypt.hashSync(`${e.password}`, 10)
          return e
      })
        
        
        console.log(admin,data);
    

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', admin)
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {});

  }
}