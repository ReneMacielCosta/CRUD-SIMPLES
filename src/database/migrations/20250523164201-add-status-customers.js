'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) { 
   return await queryInterface.addColumn('customers','status', { 
        type: Sequelize.ENUM("ACTIVE","ARCHIVED"),
        deafaultValue: "ACTIVE",
        allowNull: false,
       });
     
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(async transaction => {
      await await queryInterface.removeColumn('costuners','status',{transaction});
      await await queryInterface.query('DROP TYPE enum_customers_status',{transaction});
    }); 
  }
};
