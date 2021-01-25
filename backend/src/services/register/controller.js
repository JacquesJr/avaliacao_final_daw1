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

  async delete(req, res) {
    try {
      const { event_id, user_id, owner_id } = req.query

      const register = await Register.destroy({
        where: {
          event_id,
          user_id,
          owner_id,
        }
      })
      
      if (!register) {
        res.status(400).json({ message: 'Registro não encontrado'});
      }
      res.status(200).json({ message: 'Cadastro excluido'});
    } catch (err) {
      return res.status(400).json({ message: err.message })      
    }
  }
}