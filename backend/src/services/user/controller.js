const bcryptjs = require('bcryptjs')
const User = require('./model')

module.exports = {
  async create(req, res) {
    try {
      const { name, cpf, role, password } = req.body

      if (role !== 'TEACHER' && role !== 'STUDENT') {
        return res.status(400).json({ message: 'Cargo inválido' });
      }

      const checkUserExists = await User.findOne({ where: { cpf } });

      if (checkUserExists) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }

      const hashedPassword = await bcryptjs.hash(password, 8)

      const user = await User.create({
        name,
        cpf,
        role,
        password: hashedPassword,
      })

      delete user.dataValues.password;

      res.status(200).json(user)
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  async findOne(req, res) {
    try {
      const { id } = req.params
      
      const user = await User.findOne({
        where: { id }
      })

      if (!user) {
        res.status(400).json({ message: 'Usuário não encontrado' })
      }

      delete user.dataValues.password;
      
      res.status(200).json(user)      
    } catch (err) {
      return res.status(400).json({ message: err.message });      
    }
  },
}