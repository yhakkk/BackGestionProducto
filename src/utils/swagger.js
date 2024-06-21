const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config()
const doc = {
  
  info: {
    title: 'Gestion',
    description: 'Gestion',
  },
   host: 'localhost:'+process.env.PORT
};

const outputFile = '../../swagger-output.json';
const routes = [
  
  "../models/user.js"
];

swaggerAutogen(outputFile, routes, doc);

