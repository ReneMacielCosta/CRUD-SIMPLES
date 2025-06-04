'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) { 
   return await queryInterface.addColumn('contacts','status', { 
        type: Sequelize.ENUM("ACTIVE","ARCHIVED"),
        deafaultValue: "ACTIVE",
        allowNull: false,
       });
     
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(async transaction => {
      await await queryInterface.removeColumn('contacts','status',{transaction});
      await await queryInterface.query('DROP TYPE enum_contacts_status',{transaction});
    }); 
  }
};
