const { Sequelize } = require("../configs/sequelize")
const db = require("./../configs/sequelize")
const {Model, DataTypes} = db.Sequelize

const sequelize = db.sequelize

class Usuarios extends Model {}
Usuarios.init({
    nome : {
        type : DataTypes.STRING
    },
    ra : {
        type: DataTypes.STRING
    },
    email : {
        type: DataTypes.STRING
    },
    telefone : {
        type: DataTypes.STRING
    },
    cargo : {
        type: DataTypes.INTEGER
    }
}, {sequelize, modelName : "usuarios"})

module.exports = Usuarios