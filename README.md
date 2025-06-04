# 🧾 CRUD-SIMPLES

**CRUD-SIMPLES** é um aplicativo web que fornece uma **API RESTful** simples para gerenciamento de informações de clientes. Ele utiliza **Node.js**, **Express**, **Sequelize ORM** e um banco de dados **PostgreSQL**.

---

## 🎯 Objetivo

O principal objetivo do projeto é **disponibilizar uma API funcional e direta** para cadastro, leitura, atualização e exclusão de clientes — servindo como base de estudo ou ponto de partida para sistemas mais complexos.

---

## 🔧 Tecnologias Utilizadas

- **Node.js** – plataforma de execução JavaScript
- **Express** – framework web para rotas e controle HTTP
- **Sequelize** – ORM para modelagem e comunicação com banco de dados
- **PostgreSQL** – banco de dados relacional
- **dotenv** – carregamento de variáveis de ambiente
- **Nodemon** – reinício automático durante o desenvolvimento

---

## 📦 Funcionalidades da API

- **POST `/customers`** – criar um novo cliente
- **GET `/customers`** – listar todos os clientes
- **GET `/customers/:id`** – buscar um cliente por ID
- **PUT `/customers/:id`** – atualizar dados de um cliente
- **DELETE `/customers/:id`** – remover um cliente do banco

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/ReneMacielCosta/CRUD-SIMPLES.git
cd CRUD-SIMPLES
npm run dev
