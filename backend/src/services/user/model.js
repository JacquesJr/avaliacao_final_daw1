const db = require("../../configs/sequelize")
const {Model, DataTypes} = db.Sequelize

const sequelize = db.sequelize

class User extends Model {}
User.init({
    name : {
        type : DataTypes.STRING,
        allowNull: false,
    },
    cpf : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {sequelize, modelName : "users"})

module.exports = User