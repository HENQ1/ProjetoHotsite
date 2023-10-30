
$(document).ready(

    function () {
        $("#formCadastro").submit(
            function (e) {

               e.preventDefault();
                cadastrar();

            }

        );

    }
);

function cadastrar() {
    let parametros = {
        Nome: $("#idNome").val(),
        Email: $("#idEmail").val(),
        Mensagem: $("#idMensagem").val(),

    };

    $.post("/Home/Cadastrar", parametros)

        .done(function (data) {

            if (data.status == "ok") {

                $("#formCadastro").after("<h3>Cadastro realizado com sucesso!</h3>");
                $("#formCadastro").hide();
            }
            else {
                $("#formCadastro").after("<h3> falha no Cadastro !</h3>");
                $("#formCadastro").hide();

            }
        }

        )
    fail(function () {
        alert("Erro");

    }
    )
};



