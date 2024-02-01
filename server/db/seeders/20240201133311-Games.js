'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          user_id: 1,
          question_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          question_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};
