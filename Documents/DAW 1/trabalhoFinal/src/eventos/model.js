const db = require("./../configs/sequelize")
const { Model, DataTypes } = db.Sequelize

const sequelize = db.sequelize  


class Evento extends Model {}

Evento.init({
   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nome : {
        type : DataTypes.STRING,
        allowNull: false,
    },
    dataInicial  : {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataFinal  : {
        type: DataTypes.DATE,
        allowNull: false
    },
    endereco   : {
        type: DataTypes.STRING,
        allowNull: false
    },
    campus   : {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor  : {
        type: DataTypes.FLOAT,
        allowNull: false
    },
   
}, {sequelize, modelName : "evento"})

module.exports = Evento

