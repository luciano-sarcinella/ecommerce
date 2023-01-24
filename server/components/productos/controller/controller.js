const {options} = require('../../../config/config');
const knex = require('knex')(options);


async function productos1 (req, res){
    try {
      let response = await knex.from('productos')
      .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
      .where('id', '<=', '12')
      res.json(response)
    } catch (error) {
        res.send(error)
    }
};

async function productos2 (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .whereBetween('id', [13,24])
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function productos3 (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .whereBetween('id', [25,36])
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function productos4 (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .whereBetween('id', [37,48])
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function productos5 (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .whereBetween('id', [49,60])
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function productos6 (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('id', '=', '61')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function indumentaria (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('categoria', '=', 'indumentaria')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function remeras (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'remera')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function buzos (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'hoodie')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function zapatillas (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('categoria', '=', 'zapatilla')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function deportivas (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'deportiva')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function urbanas (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'urbana')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function relojes (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('categoria', '=', 'reloj')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function analogicos (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'analogico')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function smartwatch (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'smart')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function electronica (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('categoria', '=', 'electronica')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function headphones (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'auriculares')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function earbuds (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'earbuds')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};
async function speakers (req, res){
  try {
    let response = await knex.from('productos')
    .select('id','titulo','descripcion','precio','categoria','tag', 'url','new','sale','sold')
    .where('tag', '=', 'speakers')
    res.json(response)
  } catch (error) {
      res.send(error)
  }
};

module.exports = {
  productos1,
  productos2,
  productos3,
  productos4,
  productos5,
  productos6,
  indumentaria,
  remeras,
  buzos,
  zapatillas,
  deportivas,
  urbanas,
  relojes,
  analogicos,
  smartwatch,
  electronica,
  headphones,
  earbuds,
  speakers
  };
