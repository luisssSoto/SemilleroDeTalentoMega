// Configurar la conexiojn para nuestra bd en MongoDB
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017/mibase');

// Desarrollar una funcion para conectarnos con la bd
//y retornar el objeto que contiene la conexion
const conexionDB = () => {
    return client.connect()
    .then((dbClient) => {return dbClient})
    .catch((error) => {return error})
}

// Exportar para otro modulo
module.exports = {conexionDB};