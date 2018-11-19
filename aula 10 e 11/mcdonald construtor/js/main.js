var fatura;
var facturas=[];
$(document).ready(function () {
    fatura = new Fatura(new Date().getTime(), "", []);

    
    $('body').css('background-color', 'red');
    $('#pedidos').css('background-color', ' #e3e0cc');
    $('#div1').css('background-color', 'gainsboro');
    $('#div2').css('background-color', 'GhostWhite');
    $('#papel').css('background-color', 'Khaki');
    $('#papel2').css('background-color', 'AntiqueWhite ');

   
    

    $('#subpedido').click(function () {
        var pedido2 = new Artigo($('#ipt2').val(), $('#ipt3').val());
        fatura = new Fatura($('#ipt1').val(), pedido2);

        
        console.log(fatura);
        var papel1 = "<tr><td>" + fatura.id + "</td><td>" + fatura.name + "</td><td>" + pedido2.name+ "</td><td>" + pedido2.extra + "</td></tr>";
        $('#tabela1').append(papel1);
    });

    $('#subfatura').click(function () {
        var pedido2 = new Artigo($('#ipt2').val(), $('#ipt3').val());
        fatura = new Fatura($('#ipt1').val(), pedido2);

        var papel = "";
        
       // for (let i = 1; i < fatura.artigo.length; i++) {
           papel += "<tr><td>" + fatura.id + "</td><td>" + fatura.name + "</td><td>" + fatura.pedido.name + "</td><td>" + fatura.pedido.extra + "</td></tr>";
            console.log(papel);
            
        
        // $('#p1').append(JSON.stringify(fatura)); uma maneira de colocar o resultado da fatura no html
        $('#tabela').append(papel);
        saveFact(fatura);
        console.log(fatura);
        fatura = new Fatura("", []);
        facturas=getFaturas();
        
    });




});






/** Para introduzir um novo pedido
* var numId = new Date();
* var pedido1 = new Artigo(CBO,bacon);
* var fatura = new Fatura (numId.getTime(),marta,pedido1);
* var pedido2 = new Artigo(nugets,maionese);
*fatura.addArtigo(pedido2); 
*console.log(fatura1);
*/



