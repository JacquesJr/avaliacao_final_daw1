Posts = {

    add : () => {

        var t = {};
        t.content = $("#content").val();
        t.userId = $("#users").val();

        $.ajax({
            type : 'POST',
            url : '/post',
            data : t,
            dataType : 'json',
            success : Posts.template
        })

        return false;


    },

    template : (data) => {

        var comment = $('<div></div>')
            .attr('id', 'comment-' + data.id)
            .attr('class', 'comment');

        var content = $('<textarea></textatrea>')
            .attr('class', 'content')
            .attr('disabled', true)
            .html(data.content);

        var user = $('<p></p>').attr('class', 'user');

        if(data.user){
            user.html('Por ' + data.user.firstname + " " + data.user.lastname);
        }else{
            user.html('Por ' + $("#users option:selected").text());
        }
            

        var dtCreation = new Date(data.createdAt);
        dtCreation = (dtCreation.getDate() < 10 ? "0" + dtCreation.getDate() : dtCreation.getDate()) + 
                        "/" + ((dtCreation.getMonth() + 1) < 10 ? "0" + (dtCreation.getMonth() + 1) : (dtCreation.getMonth() + 1)) + 
                        "/" + dtCreation.getFullYear();

        var date = $('<span></span>')
            .attr('class', 'date')
            .html(dtCreation);


        var btnEdit = $('<button></button>').attr('class', 'edit').html('Editar');
        var btnSave = $('<button></button>').attr('class', 'save hidden').html('Salvar');
        var btnRemove =  $('<button></button>').attr('class', 'remove').html('Remover');

        $(btnEdit).on('click', (event) => {
            Posts.enableEdit(event.target);
        });

        $(btnSave).on('click', (event) => {
            Posts.update(event.target);
        });

        $(btnRemove).on('click', (event) => {
            Posts.remove(event.target);
        });

        $(user).append(date);

        $(comment).append(content);
        $(comment).append(user);
        $(comment).append(btnEdit);
        $(comment).append(btnSave);
        $(comment).append(btnRemove);

        $("#comments")
        $("#comments").append(comment);

    },

    findAll : () => {

        $.ajax({
            type : "GET",
            url : '/post',
            data : {content : $("#content-search").val()},
            success : (data) => {
                $("#comments").empty();
               for(var post of data){
                   Posts.template(post);
               } 
            },
            error : () => {
                console.log("Ocorreu um erro!");
            },
            dataType : 'json'
        })

    },

    enableEdit : (button) => {

        var comment = $(button).parent();

        $(comment).children('textarea').prop('disabled', false);
        $(comment).children('button.edit').hide();
        $(comment).children('button.save').show();
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

        var comment = $(button).parent();

        var id = $(comment).attr('id').replace('comment-', '');

        $.ajax({
            type : "DELETE",
            url : '/post',
            data : {'id' : id},
            success : (data) => {
               $(comment).remove();
            },
            error : () => {
                console.log("Ocorreu um erro!");
            },
            dataType : 'json'
        })


    }

}

User = {
    findAll : () => {

        $.ajax({
            type : "GET",
            url: "/alunos",
            success: User.loadAll,
            dataType : "json"
        })

    },

    loadAll : (data) => {

        var userCombo = $("#users");

        for(user of data){
            userCombo.append($('<option></option>').attr('value', user.id).html(user.firstname + ' ' + user.lastname));
        }

    }
}

$(document).ready(()=>{

    User.findAll();

    Posts.findAll();
});