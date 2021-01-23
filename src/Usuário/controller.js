const { sequelize } = require("./../configs/sequelize")
const db = require('./../configs/sequelize')
const Usuarios = require('./model')
const { Op } = db.Sequelize


exports.create = (req, res) => {
    const { nome,ra,email,telefone,cargo } = req.body
    Usuarios.create({
        nome,
        ra,
        email,
        telefone,
        cargo
    }).then((usuarios) => {
        res.send(usuarios)
    })
}

exports.findAll = (req, res) => {
    Usuarios.findAll().then( usuarios => {
        res.send(usuarios)
    })
}

exports.findByName = (req, res) => {
    Usuarios.findOne({
        where: {nome: req.body.nome}
    }).then((usuarios) => {
        res.send(usuarios)
    }).catch((err) => {
        console.log(err)
    })
}

exports.remove = (req, res) => {
    Usuarios.destroy({
        where: {
            nome: req.body.nome
        }
    }).then(() => {
        res.send({
            response: 'Usuário excluído com sucesso!'
        })
    })

}

exports.edit = (req, res) => {
    Usuarios.update(req.body, {where: {nome: req.body.nome}})
    .then(() => {
        res.send({
            response: 'Usuário editado com sucesso!'
        })
    })

}