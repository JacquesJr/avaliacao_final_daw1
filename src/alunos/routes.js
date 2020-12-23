module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo aluno
    app.post('/alunos', controller.create)

    //Busca todos os alunos
    app.get('/consultas', controller.findAll)

    //Busca todos os alunos
    app.get('/deletar', controller.remove)

    //Busca todos os alunos
    app.get('/consultas', controller.findByName)
}