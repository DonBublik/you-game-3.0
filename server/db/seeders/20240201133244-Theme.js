'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          name: 'Тема 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Тема 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Тема 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Тема 4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Тема 5',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
