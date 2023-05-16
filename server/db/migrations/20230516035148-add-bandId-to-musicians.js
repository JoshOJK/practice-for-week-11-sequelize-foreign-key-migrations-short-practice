'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Musicians', 'bandId', Sequelize.INTEGER);
    await queryInterface.addConstraint('Musicians', {
      fields: ['bandId'],
      type: 'foreign key',
      references: {
        table: 'Bands',
        fields:['id']
      },
      onDelete: 'cascade'
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Musicians', 'bandId')
  }
};
