const db = require('./../configs/sequelize')
const Post = require('./model')

const User = require('./../user/model')
const { Op } = db.Sequelize

exports.create = (req, res) => {

    Post.create({
        content : req.body.content,
        userId : req.body.userId
    }, {
        include : [{
            association : Post.User
        }]
    }).then((post) => { 
        res.send(post);
    }).catch((err) => {
        console.log("Erro: " + err)
    })
}

exports.findAll = (req, res) => {

    var options = {}

    if(req.query.content){
        options.content = {[Op.iLike] : '%' + req.query.content + '%'}
    }else{
        options.content =  {[Op.iLike] : '%teste%'}
    }

    if(req.query.dtInicial && req.query.dtFinal){
        options.teste = {[Op.between] : [req.query.dtInicial, req.query.dtFinal]}
    }

    

    Post.findAll({include : User, 
        where : {
                content : {[Op.iLike] : '%' + req.query.content + '%'}
        }, order : ['createdAt']})
    .then( posts => {
        res.send(posts)
    })
}

exports.update = (req, res) => {

    Post.update(
        {
        content : req.body.content
        }, 
        {
            where : {
                id : req.body.id
            }
        }
    ).then(() => {
        res.send({'message' : 'ok'});
    })

}

exports.remove = (req, res) => {

    Post.destroy({
        where : {
            id : req.body.id
        }
    }).then((affectedRows) => {
        res.send({'message' : 'ok', 'affectedRows' : affectedRows})
    })

}

//eager - carrega tudo (posts + os relacionamentos)
//lazy - carrega apenas a entidade principal e os demais quando for necessário