const sequelize = require('../database/db')
const { DataTypes } = require('sequelize')

const Image = sequelize.define('Image', {
    idImage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pathImage: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Image',
    timestamps: false
})

module.exports = Image