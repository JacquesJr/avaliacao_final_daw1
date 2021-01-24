const { sequelize } = require("./../configs/sequelize")
const db = require("./../configs/sequelize")
const Cadastro = require("./model")
const { Op } = require("sequelize");


exports.create = (req, res) => {

    const { id_evento, id_pessoa, id_responsavel } = req.body
    Cadastro.create({
        id_evento,
        id_pessoa,
        id_responsavel,
    }).then((cadastro) => {
        res.json(cadastro)
    })

},


    exports.findAll = (req, res) => {

        Cadastro.findAll({
        }).then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err)
        })

    },

    exports.buscarId = (req, res) => {

        const { id_cadastro } = req.body;

        Cadastro.findOne({
            where: {
                id_cadastro
            }
        }).then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err)
        })

    },

    exports.editar = (req, res) => {

        const { id_evento, id_pessoa, id_responsavel } = req.body
        Cadastro.update({
            id_evento,
            id_pessoa,
            id_responsavel,
        }, {
            where: {
                id_cadastro: req.body.id_cadastro
            }
        }).then((cadastro) => {
            res.json(cadastro);
        })

    },

    exports.remover = (req, res) => {
        const { id_cadastro } = req.body
        Cadastro.destroy({
            where: {
                id_cadastro
            }
        }).then(() => {
            res.json('Cadastro Excluido');
        })

    }



