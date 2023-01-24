const express = require('express');
const {Router} = express;
const router = Router();
const cors = require("cors");
const bodyParser = require('body-parser');
// let path = require('path');
const {config, options} = require('./config/config');
const knex = require('knex')(options);
const app = express();

const Productos = require('./routes/productos');

// Middlewares 
app.use(cors('*'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', Productos)
// (async () => {
//   try {

//   let response = await knex('productos')
//   .where({id: 42})
//   .update({url: 'https://i.ibb.co/grjcCsq/rh10.png'})
//   console.log(response);
//   } catch (error) {
//       console.log(error);
//   }
// })


app.listen(config.port,function(error){
  if(error) return console.log(error);
  console.log(`Servidor corriendo desde http://localhost:${config.port}`);
});

module.exports = {app}