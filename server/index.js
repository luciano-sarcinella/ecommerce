const express = require('express');
const {Router} = express;
const router = Router();
const cors = require("cors");
const bodyParser = require('body-parser');
const {config, options} = require('./config/config');
const knex = require('knex')(options);
const app = express();

const Productos = require('./routes/productos');

// Middlewares 
app.use('public',express.static(__dirname + '/public'));
app.use(cors('*'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/', Productos)

app.listen(config.port,function(error){
  if(error) return console.log(error);
  console.log(`Servidor corriendo desde http://localhost:${config.port}`);
});

module.exports = {app}