'use strict';
const bcrypt = require('bcryptjs');
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data/admin.json', 'utf-8'))
      data.map( (e) => {
          e.createdAt = new Date()
          e.updatedAt = new Date()
          e.password =  bcrypt.hashSync(`${e.password}`, 10)
          return e
      })
        
        console.log(data);
    

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    
    console.log(data)
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {});

  }
}