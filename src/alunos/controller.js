const { sequelize } = require("./../configs/sequelize")
const db = require("../configs/sequelize")
const Alunos = require("./model")

exports.create = (req, res) => {
    Alunos.create({
        nome : req.body.nome,
        pai : req.body.pai,
        mae : req.body.mae,
        email : req.body.email,
        telefone : req.body.telefone,
    }).then((alunos) => {
        res.send(alunos)
    })
}

exports.findAll = (req, res) => {
    Alunos.findAll().then( alunos => {
        res.send(alunos)
    })
}

exports.findByName = (req, res) => {
    Alunos.findOne({
        where: {
            nome: req.body.nome
        }
    }).then((data) => {
        res.send(data)
    }).catch((err) => {
        console.log(err)
    })
}

exports.remove = (req, res) => {
    Alunos.destroy({
        where: {
            nome: req.body.nome
        }
    }).then(() => {
        res.send('Aluno Excluido')
    })

}