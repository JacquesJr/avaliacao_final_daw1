const { sequelize } = require("./../configs/sequelize")
const db = require("./../configs/sequelize")
const Evento = require("./model")
const { Op } = require("sequelize");


exports.create = (req, res) => {

    const { nome, dataInicial, dataFinal, endereco, campus, valor } = req.body
    Evento.create({
        nome,
        dataInicial,
        dataFinal,
        endereco,
        campus,
        valor,
    }).then((evento) => {
        res.json(evento)
    })

},


    exports.findAll = (req, res) => {

        Evento.findAll({
        }).then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err)
        })

    },

    exports.buscarId = (req, res) => {

        const { id } = req.body;

        Evento.findOne({
            where: {
                id
            }
        }).then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err)
        })

    },

    exports.editar = (req, res) => {

        const { nome, dataInicial, dataFinal, endereco, campus, valor } = req.body
        Evento.update({
            nome,
            dataInicial,
            dataFinal,
            endereco,
            campus,
            valor,
        }, {
            where: {
                id: req.body.id

            }
        }).then((evento) => {
            res.json(evento);
        })

    },

    exports.remover = (req, res) => {
        const { id } = req.body
        Evento.destroy({
            where: {
                id
            }
        }).then(() => {
            res.json('Evento Excluido');
        })

    }



