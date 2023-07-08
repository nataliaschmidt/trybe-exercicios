'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Books', [
    {
      title: 'Apanhador de Sonhos',
      author: 'Stephen King',
      page_quantity: 656,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: 'A Dança da Morte',
      author: 'Stephen King',
      page_quantity: '1248',
      created_at: new Date(),
      updated_at: new Date(),
    },
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', bull, {});
  }
};
