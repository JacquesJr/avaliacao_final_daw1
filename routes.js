const Cadastro = require('./model')

module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo cadastro
    app.post('/adiciona', controller.create);


    //Busca todos os cadastros
    app.post('/buscaCadastros', controller.findAll);


    //Busca por id
    app.post('/buscaId', controller.buscarId);


    //Edita um cadastros
    app.put('/edicaoCadastro', controller.editar);

    //remove um cadastro
    app.delete('/excluirCadastro', controller.remover);


}
