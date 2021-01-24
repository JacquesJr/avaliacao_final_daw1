const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./src/configs/sequelize')
const modelo = require("./src/eventos/model")


app.use(cors())
app.use(express.json())


db.sequelize.sync({ alter : true }).then(() => {
    console.log("Deu certo a criação do banco (DROP E/OU CREATE)")
})

require('./src/eventos/routes')(app)

var server = app.listen(3000, () => {
    console.log("Servidor rodando na porta " + server.address.port + " no host " + server.address().address)
})
