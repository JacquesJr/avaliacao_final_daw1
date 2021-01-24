const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./src/configs/sequelize')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static('public'))

db.sequelize.sync({alter : true}).then(() => {
    console.log("Deu certo a criação do banco (DROP E/OU CREATE")
})

require('./src/Usuário/routes')(app)

var server = app.listen(3000, () => {
    console.log("Servidor rodando na porta " + server.address.port + " no host " + server.address().address)
})