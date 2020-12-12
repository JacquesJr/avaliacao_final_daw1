const db = require("./../configs/sequelize")
const User = require("./model")

exports.create = (req, res) => {
    User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname
    }).then((user) => {
        res.send(user)
    })
}

exports.findAll = (req, res) => {
    User.findAll().then( users => {
        res.send(users)
    })
}