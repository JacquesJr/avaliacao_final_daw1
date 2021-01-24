const Register = require("./model")

module.exports = {
  create(req, res) {
    try {
      const { event_id, user_id, owner_id } = req.body
      Register.create({
        event_id,
        user_id,
        owner_id,
      }).then((register) => {
        res.status(200).json(register)
      })      
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  findOne(req, res) {
    try {
      const { id } = req.params;
      Register.findOne({
        where: {
          id
        }
      }).then((register) => {
        if (!register) {
          res.status(400).json({ message: 'Registro não encontrado'});
        }
        res.status(200).json(register)
      }).catch((err) => {
        console.log(err)
      })      
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  delete(req, res) {
    try {
      const { id } = req.params
      Register.destroy({
        where: { id }
      }).then((register) => {
        if (!register) {
          res.status(400).json({ message: 'Registro não encontrado'});
        }
        res.status(200).json({ message: 'Cadastro excluido'});
      })      
    } catch (err) {
      return res.status(400).json({ message: err.message })      
    }
  }
}