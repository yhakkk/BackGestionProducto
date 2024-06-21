require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json');

//Routers


//Setup

const app = express();
const PORT = process.env.PORT

const cors = require('cors');
const bodyParserr = require('body-parser');

app.use(cors());

app.use(bodyParserr.json());
app.use(bodyParserr.urlencoded({extended:false}));

mongoose.connect(
    process.env.BD_CONNECT, { useNewUrlParser: true, useUnifiedTopology:true }
);

app.get("/", async (req,res) => {
    return res.send("Backend Gestion Productos")

})

//Router 
// app.use(loginRouter);
//app.use(usuarioRouter)



app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, X-UserId, X-Nonce' +  
      ', X-Secret, X-Ts, X-Sig, X-Vendor-Sig, X-Vendor-Apikey, X-Vendor-Nonce, X-Vendor-Ts, X-ProfileId' +
      ', X-Authorization, Authorization, Token, Pragma, Cache-Control, Expires');
    res.header('Access-Control-Allow-Methods', 'HEAD,OPTIONS,GET,PUT,POST,DELETE');  
    next();
  });  
  var options = {
    explorer: true  
  };  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options))
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)  
  })  
  
