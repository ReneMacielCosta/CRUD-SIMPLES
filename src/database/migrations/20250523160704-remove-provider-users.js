'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface) {
   return await queryInterface.removeColumn('users', 'provider');
  },

  async down (queryInterface, Sequelize) {
    
      return await queryInterface.addColumn('users','provider', { 
        type: Sequelize.BOOLEAN,
        deafault: false,
        allowNull: false,
       });
  }
};
