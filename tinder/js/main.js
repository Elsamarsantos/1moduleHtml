var livros = [];
var starIndex=0;

class Book{
    constructor(titulo,imagem){
        this.titulo = titulo;
        this.imagem = imagem;
        this.like = 0;
    }
}

function buscarlivro(escolherlivros) {
    $.ajax({
        url:`https://www.googleapis.com/books/v1/volumes?q=${escolherlivros}&maxresults=60&starIndex=${starIndex}`,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);

            for (i = 0; i < data.items.length; i++) {
                let livro = new Book(data.items[i].volumeInfo.title,data.items[i].volumeInfo.imageLinks.thumbnail);
                livros.push(livro);
            };
            buscarinfo();
            

            console.log("livros"+livros[0]);
            


        }
    });
};


var numero = 0;
function buscarinfo() {
    let livroactual = livros[numero];
    

    $('#imagem1').attr("src", livroactual.imagem);
    $('#titulo1').html(livroactual.titulo);

    let livroactual2 = livros[numero+2];
    $('#imagem2').attr("src", livroactual2.imagem);
    $('#titulo2').html(livroactual2.titulo);
    
    let livroactual3 = livros[numero+3];
    $('#imagem3').attr("src", livroactual3.imagem);
    $('#titulo3').html(livroactual3.titulo);
    
    numero++;

    

};

function contarlikes() {

    livros[numero - 1].like += 1;
};
