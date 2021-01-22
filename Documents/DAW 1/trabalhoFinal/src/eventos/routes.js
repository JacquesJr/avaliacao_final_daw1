const User = require('./model')

module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo evento
    app.post('/', controller.create);


    //Busca todos os eventos
    app.post('/buscaGeral', controller.findAll);


    //Busca todos os eventos
    app.post('/busca', controller.buscarId);


    //Edita um evento
    app.put('/edicao', controller.editar);

    //remove um evento
    app.delete('/excluir', controller.remover);


}