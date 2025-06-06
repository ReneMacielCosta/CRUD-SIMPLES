import { Sequelize, Model } from "sequelize";

class Contact extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            status: Sequelize.ENUM("ACTIVE","ARCHIVED"),
        },
        {
            sequelize,
            modelName: "Contact",
            name:{
                singular:"contact",
                plural:"contacts",
            },    
        });
    }  
    
    static associate (models){
        this.belongsTo(models.Customer, { foreignKey: "customers_id" })
    }
}

export default Contact;