const {options} = require('../config/config');
const knex = require('knex')(options);

// class Handle {
//     //crear tabla
//     async crearTabla(){
//         try {
//             await knex.schema.createTable('productos', table =>{
//                 table.increments('id')
//                 table.string('titulo')
//                 table.string('descripcion')
//                 table.float('precio')
//                 table.string('categoria')
//                 table.string('tags')
//                 table.boolean('new')
//                 table.boolean('sale')
//                 table.boolean('sold')
//                 table.string('url')
//                 table.integer('stock')
//             })
//             console.log('tabla creada');
//         } catch (error) {
//             console.error(error)
//         }
//     };

//     // insertar data dentro de tabla
//     async  actualizarTabla () {
//         try {
//             let data = [
//                 // {
//                 //     nombre: "televisor",
//                 //     codigo: "cd123",
//                 //     precio: "12.5",
//                 //     stock: 10
//                 // },
//                 // {   nombre: "Monitor LG",
//                 //     codigo: "cd87123",
//                 //     precio: "842.5",
//                 //     stock: 50
//                 // }
//             ];
    
//             let response = await knex(productos).insert(data);
//             console.log(response);
    
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     // leer data
//     async devolverData () {
//         try {
//             let response = await db.from("articulos");
//             JSON.parse(response);
            
//         } catch (error) {
//             console.log(error)
//         }
//     };

// };

// module.exports = new Handle ();