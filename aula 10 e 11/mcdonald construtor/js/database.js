var data;
function getFaturas() {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/",
        type: 'GET',
        contentType: 'application/json',
        success: function (results) {
            data = results;
        }

    });


};



function saveFact(fact) {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/orders",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(fatura),
        success: function (result) {
            console.log(result);
        }, error: function (data) {
            console.log(data)
        }
    });

}







// function getExtra() {
//     var faturas = []
//     faturas.push({ id: 1, nome: "elsa", comida: [{ hamb: "cheese", extra: "doublecheese" }, { hamb: "bacon", extra: "doublecheese" }] });
//     faturas.push({ id: 2, nome: "luis", comida: [{ hamb: "chicken", extra: "maionese" }] });
//     faturas.push({ id: 3, nome: "soraya", comida: [{ hamb: "big taste" }] });
//     faturas.push({ id: 4, nome: "diogo", comida: [{ hamb: "CBO", extra: "ketchup" }] });
//     faturas.push({ id: 5, nome: "miguel", comida: [{ hamb: "mediterranea", extra: "rucula" }] });



//     console.log(faturas);

// /**
//  * exercicio abaixo é para ir buscar as faturas que têm pedidos extra
//  */
//     var resposta = [];

//     for (let i = 0; i < faturas.length; i++) {
//         var pedido = faturas[i].comida;



//         for (let z = 0; z < pedido.length; z++) {
//             var menu = pedido[z];
//             if (Object.keys(menu).length > 1 && resposta.indexOf(faturas[i]) == -1) {
//                 resposta.push(faturas[i]);
//             }

//         }


//     }
//     console.log(resposta);
//     return resposta
// }