Usuarios = {
    add : () => {
        var dado = {};
        dado.nome = $("#nome").val();
        dado.ra = $("#ra").val();
        dado.email = $("#email").val();
        dado.telefone = $("#telefone").val();
        dado.cargo = $("#cargo").val();

        $.ajax({
            type : 'POST',
            url : '/usuarios',
            data : dado,
            dataType : 'json',
            success : () => {
                alert("Inserido com sucesso!");
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000); 
            }
        })

        return false;


    },

    findAll : () => {
        $.ajax({
            type : "GET",
            url: "/consultas",
            success : (data) => {
               $("#bodyConsulta").html('');
               for(var user of data){
                   Usuarios.template(user);
               } 
            },
            error : () => {
                console.log("Ocorreu um erro!");
            },
            dataType : "json"
        })

    },

    remove : (valor) => {

        $.ajax({
            type : "DELETE",
            url : '/consultaUsuario',
            data : {'nome' : valor},
            success : (res) => {
                alert(res.response);
                setTimeout(() => {
                    window.location.href = '/consulta'
                }, 1000); 
            },
            dataType : 'json'
        })


    },

    findByName : (event) => {
        $.ajax({
            type : "GET",
            url: "/consultaUsuario",
            data:{'nome': nome },
            success: (dados) =>{
                $("#bodyConsulta").html('');
                Usuarios.template(dados)
            },
            error: () =>{
                alert('Nenhum dado encontrado');
            },
            dataType : "json"
        })

    },

    editValues : () => {
        var queryStringNome = (window.location.pathname).split("/", 3)[2];
        $.ajax({
            type : "GET",
            url: "/consultaUsuario",
            data:{'nome': queryStringNome },
            success: (dados) =>{
                $("#InputNome").val(dados.nome)
                $("#InputPai").val(dados.pai)
                $("#InputMae").val(dados.mae)
                $("#InputEmail").val(dados.email);
                $("#InputTelefone").val(dados.telefone);
            },
            error: () =>{
                alert('Nenhum dado encontrado');
            },
            dataType : "json"
        })
    },

    edit : (dados) => {
        var dado = {};
        dado.nome = $("#InputNome").val();
        dado.pai = $("#InputPai").val();
        dado.mae = $("#InputMae").val();
        dado.email = $("#InputEmail").val();
        dado.telefone = $("#InputTelefone").val();
        $.ajax({
            url: '/consultaUsuario',
            type: 'PUT',
            data: dado,
            success: (dados) => {
                alert(dados.response);
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000); 
            }
          });
    },

}

$(document).ready(()=>{
    Usuarios.findAll();
});