const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('app_photo', 'root', 'cesar', {
    host: 'localhost',
    dialect: 'mysql'
})

if (sequelize) {
    console.log('Conexion a la base de datos satisfactoria');
} else {
    console.log('Conexion a la base de datos fallida');
}

module.exports = sequelize