'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Лукаш',
          password: await bcrypt.hash('123', 10),
          max_result: 1000,
          email: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ираклий',
          password: await bcrypt.hash('123', 10),
          max_result: 0,
          email: '124',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Алекс',
          password: await bcrypt.hash('123', 10),
          max_result: 500000,
          email: '1235',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
