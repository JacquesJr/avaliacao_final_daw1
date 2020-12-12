const db = require("./../configs/sequelize")
const {Model, DataTypes} = db.Sequelize

const sequelize = db.sequelize

class User extends Model {}
User.init({
    firstname : {
        type : DataTypes.STRING
    },
    lastname : {
        type: DataTypes.STRING
    }
}, {sequelize, modelName : "users"})

module.exports = User