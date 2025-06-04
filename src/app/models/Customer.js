import { Model, DataTypes } from "sequelize";
//import sequelize from "/Users/SorteMilionaria/ProjectosNodeJs/Crud-Simples/src/database/index.js";

class Customer extends Model {
    static init(sequelize){
       return super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
           // status: Sequelize.ENUM("ACTIVE","ARCHIVED"),
        },
        {
            sequelize,
            modelName: "Customer",
        });
    } 
     static associate (models){
        this.hasMany(models.Contact)
    } 
}

export default Customer;