module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo post
    app.post('/post', controller.create)

    //Busca todos os posts
    app.get('/post', controller.findAll)

    //app.get('/post/{id}', controller.findOne)

    //Atualiza um post por ID
    app.put('/post', controller.update)

    //Remove um post por ID
    app.delete('/post', controller.remove)

}