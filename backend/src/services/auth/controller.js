const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require('../user/model');

module.exports = {
  async auth (req, res) {
    try { 
        const {cpf, password } = req.body;

        const user = await User.findOne({ where: { cpf } });
        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado" });
        }
        const passwordValid = await bcryptjs.compare(
            password,
            user.dataValues.password
        );
        if (!passwordValid) {
            return res.status(400).json({ message: "Senha Incorreta" });
        }
        const token = jwt.sign({}, "segredoToken", {
            subject: user.dataValues.cpf,
            expiresIn: "1d",
        });
        delete user.dataValues.password;
        return res.status(200).json({
            user,
            token,
        });
      } catch (err) {
        return res.status(400).json({ message: err.message }); 
      }
  },
};
