$(document).ready(function () {

    $('#b').click(function () {
        var lista =getExtra();
        console.log(lista);
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            $('#p').append(lista[i].nome + ", ");   
        }

    });
    $('#b1').click(function () {
        $('#p1').append(addtodata());
      
    });
});
   

function addtodata() {
    var numId =[];
    var name =$('#ipt1').val();
    var food =$('#ipt2').val();
    var fExtra=$('#ipt3').val();
    var novafatura=[];
    console.log($('#ipt1').val()); // para ver se vai buscar bem o valor
    

    for (let y = 0; y < numId.length; y++) {
        if (Object.keys(faturas[i].id)>0) {
            numId += parseInt(faturas[i].id);
        } 
       
        
    }
    novafatura.push({ id: numId, nome: name, comida:[{hamb: food, extra: fExtra}] });
   
    console.log(novafatura); // para ver se cria o novo objecto
    
    
    
}

function getExtra() {
    var faturas = []
    faturas.push({ id: 1, nome: "elsa", comida: [{ hamb: "cheese", extra: "doublecheese" }, { hamb: "bacon", extra: "doublecheese" }] });
    faturas.push({ id: 2, nome: "luis", comida: [{ hamb: "chicken", extra: "maionese" }] });
    faturas.push({ id: 3, nome: "soraya", comida: [{ hamb: "big taste" }] });
    faturas.push({ id: 4, nome: "diogo", comida: [{ hamb: "CBO", extra: "ketchup" }] });
    faturas.push({ id: 5, nome: "miguel", comida: [{ hamb: "mediterranea", extra: "rucula" }] });
   
    

    console.log(faturas);


    var resposta = [];

    for (let i = 0; i < faturas.length; i++) {
        var pedido = faturas[i].comida;

    

        for (let z = 0; z < pedido.length; z++) {
            var menu = pedido[z];
            if (Object.keys(menu).length>1 && resposta.indexOf(faturas[i])==-1){
                resposta.push(faturas[i]);
            }

        }


    }
    console.log(resposta);
    return resposta
}


