const db = require("../../configs/sequelize")
const { Model, DataTypes } = db.Sequelize

const sequelize = db.sequelize

class Event extends Model { }

Event.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  campus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inicialDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  finalDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
}, { sequelize, modelName: "events" })

module.exports = Event

