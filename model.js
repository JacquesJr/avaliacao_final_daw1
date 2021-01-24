const db = require("./../configs/sequelize")
const { Model, DataTypes } = db.Sequelize

const sequelize = db.sequelize


class Cadastro extends Model { }

Cadastro.init({

    id_cadastro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_evento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_pessoa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_responsavel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


}, { sequelize, modelName: "cadastro"})

module.exports = Cadastro

