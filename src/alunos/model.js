const db = require("../configs/sequelize")
const {Model, DataTypes} = db.Sequelize

const sequelize = db.sequelize

class User extends Model {}
User.init({
    nome : {
        type : DataTypes.STRING
    },
    pai : {
        type: DataTypes.STRING
    },
    mae : {
        type: DataTypes.STRING
    },
    email : {
        type: DataTypes.STRING
    },
    telefone : {
        type: DataTypes.STRING
    }
}, {sequelize, modelName : "alunos"})

module.exports = User