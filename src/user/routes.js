module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo usuário
    app.post('/usuarios', controller.create)

    //Busca todos os usuários
    app.get('/usuarios', controller.findAll)

}