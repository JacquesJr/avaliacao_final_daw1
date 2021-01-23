module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo usuário
    app.post('/usuarios', controller.create)

    //Busca todos os usuário
    app.get('/consultas', controller.findAll)
    
    //Achar um usuário
    app.get('/consultaUsuario', controller.findByName)

    //Remove um usuário
    app.delete('/consultaUsuario', controller.remove)
    
    //Editar um usuário
    app.put('/consultaUsuario', controller.edit)
}