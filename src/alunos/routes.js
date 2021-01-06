module.exports = (app) => {

    const controller = require('./controller')

    //Criar um novo aluno
    app.post('/alunos', controller.create)

    //Busca todos os alunos
    app.get('/consultas', controller.findAll)
    
    //Achar um aluno
    app.get('/consultaAluno', controller.findByName)

    //Remove um aluno
    app.delete('/consultaAluno', controller.remove)
    
    //Editar um aluno
    app.put('/consultaAluno', controller.edit)
}