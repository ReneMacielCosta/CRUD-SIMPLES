import Customer from "../models/Customer.js";

let customers = [
      { id: 1, name: 'Rene Maciel da Costa', email: 'kiwiigunzz@gmail.com' },
      { id: 2, name: 'Gabriela Vicente Maciel', email: 'gabriela@gmail.com' },
      { id: 3, name: 'Balbina Vicente Maciel', email: 'balbina@gmail.com' }
    ];

class CustomersController {

    //Listar Customers
  async index(req, res) {
    const data = await Customer.findAll({
      limit: 1000,
    });
    return res.json(data);
  }

  //Listar um Customer
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;
    console.log("GET :: /costumers/:id ", customer);
    res.status(status).json(customer);
  }


  //Criar Customer
  create(req, res) {
    const { name, email } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, name, email };

    this.customers.push(newCustomer); 
    console.log("POST :: /costumers ", newCustomer);
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