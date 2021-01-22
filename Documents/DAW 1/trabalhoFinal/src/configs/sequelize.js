
const dbConfig = require('./database.js')
const Sequelize = require('Sequelize')

const sequelize = new Sequelize(dbConfig)

const db = {}   

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db 