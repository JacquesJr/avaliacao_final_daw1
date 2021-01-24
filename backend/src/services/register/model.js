const db = require("../../configs/sequelize")
const { Model, DataTypes } = db.Sequelize

const sequelize = db.sequelize

class Register extends Model { }

Register.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { sequelize, modelName: "registers" })

module.exports = Register

