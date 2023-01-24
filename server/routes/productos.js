const express = require('express');
const ProductCtrl = require('../components/productos/controller/controller');

const Router = express.Router();

Router.get('/productos/1',ProductCtrl.productos1)
    .get('/productos/2',ProductCtrl.productos2)
    .get('/productos/3',ProductCtrl.productos3)
    .get('/productos/4',ProductCtrl.productos4)
    .get('/productos/5',ProductCtrl.productos5)
    .get('/productos/6',ProductCtrl.productos6)
    .get('/productos/indumentaria',ProductCtrl.indumentaria)
    .get('/productos/remeras',ProductCtrl.remeras)
    .get('/productos/buzos',ProductCtrl.buzos)
    .get('/productos/zapatillas',ProductCtrl.zapatillas)
    .get('/productos/deportivas',ProductCtrl.deportivas)
    .get('/productos/urbanas',ProductCtrl.urbanas)
    .get('/productos/relojes',ProductCtrl.relojes)
    .get('/productos/analogicos',ProductCtrl.analogicos)
    .get('/productos/smartwatch',ProductCtrl.smartwatch)
    .get('/productos/electronica',ProductCtrl.electronica)
    .get('/productos/headphones',ProductCtrl.headphones)
    .get('/productos/earbuds',ProductCtrl.earbuds)
    .get('/productos/speakers',ProductCtrl.speakers)

module.exports = Router;