$(document).ready(function () {
    var escolherlivro = "";

    $('#botaoiniciar').click(function () {
        alert("Por favor preencher que livros quer pesquisar.");
        $('#iptpesquisar').css("border-color", "red");
    });

    var verificaript;
    verificaript = $('#iptpesquisar').val().lenght;
    var enableDisableButton = function () {
        if (verificaript > 0) {
            $('#botaopesquisar').removeAttr("disabled");
        }
        else {
            $('#botaopesquisar').attr("disabled", "disabled");
        };
    };
    enableDisableButton();
    $('#iptpesquisar').keyup(function () {
        //checking the length of the value of message and assigning to the variable(checkField) on keyup
        verificaript = $("#iptpesquisar").val().length;
        //calling enableDisableButton() function on keyup
        enableDisableButton();
    });



    $('#botaopesquisar').click(function () {

        if (escolherlivro != $('#iptpesquisar').val()) {
            books = [];

        }
        escolherlivro = $('#iptpesquisar').val();

        getbooks(escolherlivro);

        $('#tinder').fadeIn();




    });




    $('#botaolike').click(function () {



        if ((bookindex + 5) % 40 == 0) {
            getbooks(escolherlivro);
            var result = (bookindex + 5) / 40;
            startIndex = 40 * result;
        }

        showlike();
        $('#tabelalike').fadeIn();
        getinfo();


    });




    $('#botaodislike').click(function () {
        // getbooks(escolherlivro);  
        if ((bookindex + 5) % 40 == 0) {
            getbooks(escolherlivro);
            var result = (bookindex + 5) / 40;
            startIndex = 40 * result;
        }
        getinfo();
    });


    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });


    var data = new Date;
    showdata = "Data: " + data.getDate() + "-" + data.getMonth() + "-" + data.getFullYear() + " Hora:" + data.getHours() + ":" + data.getMinutes();
    $('#data').html(showdata);

});