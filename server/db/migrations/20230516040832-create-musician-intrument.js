'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MusicianInstruments', {
      musicianId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Musicians',
          key: 'id'
        }

      },
      instrumentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Instruments',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MusicianInstruments');
  }
};
