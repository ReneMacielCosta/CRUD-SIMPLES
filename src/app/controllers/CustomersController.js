import * as Yup from "yup";
import { Op } from "sequelize";
import Customer from "../models/Customer.js";
import Contact from "../models/Contact.js";
import { parseISO } from "date-fns";

let customers = [
      { id: 1, name: 'Rene Maciel da Costa', email: 'kiwiigunzz@gmail.com' },
      { id: 2, name: 'Gabriela Vicente Maciel', email: 'gabriela@gmail.com' },
      { id: 3, name: 'Balbina Vicente Maciel', email: 'balbina@gmail.com' }
    ];

class CustomersController {

    //Listar Customers
  async index(req, res) {
    const{
      name,
      email,
      status,
      createdBefore,
      createdAfter,
      updatedBefore,
      updatedAfter,
      sort,
    } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};
    let order = [];


    if(name) {
      where = {
        ...where,
        name: {
          [Op.iLike]: name,
        },
      };
    }

    if(email) {
      where = {
        ...where,
        email: {
          [Op.iLike]: email,
        },
      };
    }

    if(status) {
      where = {
        ...where,
        status: {
          [Op.in]: status.split(",").map(item => item.toUpperCase()),
        },
      };
    }

    if(createdBefore) {
      where = {
        ...where,
        createdAt: {
          [Op.gte]: parseISO(createdBefore),
        },
      };
    }

    if(createdAfter) {
      where = {
        ...where,
        createdAt: {
          [Op.lte]: parseISO(createdAfter),
        },
      };
    }

    if(updatedBefore) {
      where = {
        ...where,
        updatedAt: {
          [Op.gte]: parseISO(updatedBefore),
        },
      };
    }

    if(updatedAfter) {
      where = {
        ...where,
        updatedAt: {
          [Op.lte]: parseISO(updatedAfter),
        },
      };
    }

    if(sort){
      order =  sort.split(",").map(item => item.split(":"));
    }
    
    const data = await Customer.findAll({
      where,
      include:[{
        model: Contact,
        attributes:["id"],
      }],
      order,
      limit,
    offset: limit * page - limit,
  });
    return res.json(data);
}

  //Listar um Customer
  async show(req, res) {
    const customer = await customers.findByPk(req.params.id);
    const status = customer ? 200 : 404;
    if(!customer) {
      return res.status(404).json({error: "Registro nao foi encontrado "});
    }
    res.status(status).json(customer);
  }


  //Criar Customer
  async create(req, res) {
    const schema = Yup.object.shape({
      name:Yup.string.required(),
      email:Yup.string.email().required(),
      status: Yup.string.uppercase(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: "Erro ao validar o schema!"})
    };
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  }

  //Actualizar Customers
  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers[index] = { id, name, email }; 
    }
    console.log("PUT :: /costumers/:id ", customers[index]);
    return res.status(status).json(customers[index]);
  }

  //Deletar um Customer
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers.splice(index, 1);
    }
    console.log("GET :: /costumers/:id ", customers[index]);
    return res.status(status).json();
  }
  
}

export default new CustomersController();