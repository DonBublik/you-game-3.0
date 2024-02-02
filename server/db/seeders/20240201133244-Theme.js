"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          name: "Мемы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Компьютерные игры",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Фильмы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Музыкальные альбомы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Разное",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
