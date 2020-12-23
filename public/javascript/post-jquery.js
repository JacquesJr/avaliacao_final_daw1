Alunos = {
    add : () => {
        var dado = {};
        dado.nome = $("#InputNome").val();
        dado.pai = $("#InputPai").val();
        dado.mae = $("#InputMae").val();
        dado.email = $("#InputEmail").val();
        dado.telefone = $("#InputTelefone").val();

        $.ajax({
            type : 'POST',
            url : '/alunos',
            data : dado,
            dataType : 'json',
            success : () => {
                console.log(dado);
                alert("Inserido com sucesso!");
                setTimeout(() => {
                    window.location.href = '/'
                }, 2000); 
            }
        })

        return false;


    },

    template : (data) =>{

        $('#tabelaConsulta').append(`<tr>
        <td class="nome">${data.nome}</td>
        <td>${data.pai}</td>
        <td>${data.mae}</td>
        <td>${data.email}</td>
        <td>${data.telefone}</td>
        <td><button class="btn btn-primary btnEditar">Editar</button>
            <button class="btn btn-primary btnExcluir">Excluir</button>
        <td></tr>`);

        $('.btnEditar').on("click", (event) =>{
            Alunos.update(event.target);
        })

        $('.btnExcluir').on("click", (event) =>{
            Alunos.remove(event.target);
        })

    },

    findAll : () => {

        $.ajax({
            type : "GET",
            url: "/consultas",
            success : (data) => {
               $('#tabelaConsulta')[0].innerHTML = ""
               for(var aluno of data){
                   Alunos.template(aluno);
               } 
            },
            error : () => {
                console.log("Ocorreu um erro!");
            },
            dataType : "json"
        })

    },

    update : (button) => {

        var comment = $(button).parent();

        var id = $(comment).attr('id').replace('comment-', '');
        var content = $(comment).children('textarea').val();

        $.ajax({
            type : "PUT",
            url : '/post',
            data : {'content' : content, 'id' : id},
            success : (data) => {
               //quando der certo!!!
                $(comment).children('textarea').prop('disabled', true);
                $(comment).children('button.edit').show();
                $(comment).children('button.save').hide();
            },
            error : () => {
                console.log("Ocorreu um erro!");
            },
            dataType : 'json'
        })


    },

    remove : (button) => {
        var nome = button.parentElement.parentElement.getElementsByClassName('nome')[0].innerText;
        
        $.ajax({
            type : "DELETE",
            url : '/consultaAluno',
            data : {'nome' : nome},
            success : (data) => {
               alert("Aluno: " + data + " removido com sucesso!")
            },
            error : () => {
                console.log("Ocorreu um erro!");
            },
            dataType : 'json'
        })


    },

    findByName : (event) => {

        const nome = $('#filterNome').val();
        $.ajax({
            type : "GET",
            url: "/consultaAluno",
            data:{'nome': nome },
            success: (dados) =>{
                $('#tabelaConsulta')[0].innerHTML = ""
                Alunos.template(dados)
            },
            error: () =>{
                alert('Nenhum dado encontrado');
            },
            dataType : "json"
        })

    },
}

$(document).ready(()=>{
    Alunos.findAll();
});