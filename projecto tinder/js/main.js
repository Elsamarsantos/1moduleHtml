var books = [];
var pesquisa = "";
var limitar=40;
var startIndex=0;

class Book{

    constructor(titulo,imagem,descricao){
        this.titulo = titulo;
        this.imagem = imagem;
        this.descricao =  descricao;
        this.like = 0;
    }


}
function getbooks(escolherlivro) {

    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${escolherlivro}&maxResults=${limitar}&startIndex=${startIndex}`,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);

            for (i = 0; i < data.items.length; i++) {
                let book = new Book(data.items[i].volumeInfo.title,data.items[i].volumeInfo.imageLinks.thumbnail,data.items[i].volumeInfo.description);
                books.push(book);
            };
            getinfo();

            console.log(books);

        }


    });
};




var bookindex = 0;
function getinfo() {
    let bookactual = books[bookindex];

    $('#imagem').attr("src", bookactual.imagem);
    console.log("imagem" + bookactual.imagem);

    $('#titulo').html(bookactual.titulo);
    console.log("Titulo2" + bookactual.titulo);

    $('#descricao').html(bookactual.descricao);


    bookindex++;
};



function countlike() {

    books[bookindex - 1].like += 1;
};

function showlike() {
    $("table tbody").html("");

   for (let index = 0; index < books.length; index++) {
       const l = books[index];
        if (l.like>0) {
            var x = "<tr><td>" + l.titulo + "</td><td>" + l.like + "</td></tr>";
            $("table tbody").append(x);
        }
    }

};







