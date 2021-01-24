const express = require('express')
const cors = require('cors')

const routes = require('./routes');
const db = require('./configs/sequelize')

const app = express()

app.use(cors())
app.use(express.json())

db.sequelize.sync({ alter : true }).then(() => {
    console.log("Deu certo a criação do banco (DROP E/OU CREATE)")
})

app.use(routes);

app.listen(3333, () => {
    console.log("🚀 Servidor rodando na porta 3333")
})
