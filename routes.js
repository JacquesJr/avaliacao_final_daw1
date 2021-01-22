const Cadastro = require('./model')

module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo cadastro
    app.post('/adiciona', controller.create);


    //Busca todos os cadastros
    app.post('/buscaCadastros', controller.findAll);


    //Busca todos os eventos
    app.post('/buscaId', controller.buscarId);


    //Edita um evento
    app.put('/edicaoCadastro', controller.editar);

    //remove um evento
    app.delete('/excluirCadastro', controller.remover);


}