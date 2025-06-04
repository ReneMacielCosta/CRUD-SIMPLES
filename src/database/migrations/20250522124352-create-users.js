'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autiIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, 
      },
      passwordhash: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      provider: {
        type: Sequelize.BOOLEAN,
        deafault: false,
        allowNull: false, 
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
    return await queryInterface.dropTable('users')    
  },
};
