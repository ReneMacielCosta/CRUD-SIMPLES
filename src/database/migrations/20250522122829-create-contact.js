'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('contact',{
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: "customers", key: "id"},
        onUpdate:  "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      } 
    });
  },

  async down (queryInterface) {
    return queryInterface.dropTable('contact')    
  },
};