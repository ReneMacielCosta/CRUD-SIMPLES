import Sequelize from "sequelize";
import config from "../config/database.js";
import Customer from "../app/models/Customer.js";
import Contact from "../app/models/Contact.js";
import User from "../app/models/User.js";

const models = [Customer, Contact, User];

class Database {
    constructor(){
        this.connection = new Sequelize(config);
        this.init();
        this.associate();
        this.sync();
    }

    init() {
    models.forEach(model => model.init(this.connection));  
    }

    associate() {
      models.forEach(model => {
        if (model.associate) {
          model.associate(this.connection.models);
        }
      });
    }
    
    async sync() {
    try {
      await this.connection.sync({ alter: true }); // Cria/atualiza tabelas automaticamente
      console.log("✅ Banco sincronizado com sucesso.");
    } catch (error) {
      console.error("❌ Erro ao sincronizar banco:", error);
    }
  }
}

export default new Database();