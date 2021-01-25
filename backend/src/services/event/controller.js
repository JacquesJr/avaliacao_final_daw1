const Event = require("./model")
const Register = require("../register/model")

module.exports = {
  async create(req, res) {
    try {
      const { name, address, campus, inicialDate, finalDate, owner_id, value } = req.body
      const event = await Event.create({
        name,
        active: true,
        address,
        campus,
        inicialDate,
        finalDate,
        owner_id,
        value
      })
      
      res.status(200).json(event)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  async findAll(req, res) {
    try {
      const events = await Event.findAll({ where: { active: true } })
      res.status(200).json(events)
    } catch (err) {
      return res.status(400).json({ message: err.message })      
    }
  },

  async findByUser(req, res) {
    try {
      const { id } = req.params;
  
      const registers = await Register.findAll({
        where: {
          user_id: id,
        }
      })
      if (!registers) {
        res.status(400).json({ message: 'Nenhum evento encontrado' })
      }

      const events = await Event.findAll({
        where: {
          id: registers.map(r => r.event_id)
        }
      })

      res.status(200).json(events)
    } catch (err) {
      return res.status(400).json({ message: err.message })           
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, address, campus, inicialDate, finalDate, value } = req.body
  
      const eventFinded = await Event.findOne({
        where: {
          id,
          active: true,
        }
      })

      if (!eventFinded) {
        res.status(400).json({ message: 'Nenhum evento encontrado' })
      }

      const event = await Event.update({
        name,
        address,
        campus,
        inicialDate,
        finalDate,
        value
      }, {
        where: { id }
      })
      res.status(200).json(event);
    } catch (err) {
      return res.status(400).json({ message: err.message })         
    }
  },

  delete(req, res) {
    try {
      const { id } = req.params
      Event.update({
        active: false,
      }, {
        where: { id }
      }).then(() => {
        res.status(200).json({ message: 'Evento excluido'});
      })      
    } catch (err) {
      return res.status(400).json({ message: err.message })             
    }
  }
}