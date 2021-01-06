const db = require('./../configs/sequelize')
const Alunos = require('./model')
const { Op } = db.Sequelize


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
        where: {nome: req.query.nome}
    }).then((data) => {
        console.log
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
        res.send({
            response: 'Aluno excluído com sucesso!'
        })
    })

}

exports.edit = (req, res) => {
    Alunos.update(req.body, {where: {nome: req.body.nome}})
    .then(() => {
        res.send({
            response: 'Aluno editado com sucesso!'
        })
    })

}