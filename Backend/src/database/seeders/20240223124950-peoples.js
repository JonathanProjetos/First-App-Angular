'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('peoples', [
      {
        name: 'jonathan',
        email: 'test@test.com',
      }
    ]
    )
  },
  
  async down (queryInterface, Sequelize) {}
};
