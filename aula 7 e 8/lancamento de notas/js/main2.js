$(document).ready(function () {

    console.log("ola"); //para debug
    $("#submeter").click(function () {
        $('#tabela').html(preencher());
        // $('#pmedia').html(calcularmedia());
    });
});
var somanotas = 0;
var nrAluno=0;
var somatorio=0;
var desviopadrao =0;

var calculonota=[];
function preencher(notas) {

    nrAluno++
    var aluno = nrAluno
    console.log(nrAluno);
   
    var nota = $('#notaluno').val();
    console.log(nota);
    
    var notas = "<tr><td>" + aluno + "</td><td>" + nota + "</td></tr>";
    

    somanotas += parseInt(nota);
    console.log("ver: "+ somanotas);

    var media = somanotas/parseInt(aluno);
    console.log("media: "+media);
    
    $("table tbody").append(notas);
/*
*calcular o desvio padrao 
*/
    
    
    calculonota.push(parseInt(nota));
    
    console.log("array"+ calculonota[0]+calculonota[1]);
    var somatorio=0
    for (let i = 0; i < calculonota.length; i++) {
        
        somatorio+=Math.pow((calculonota[i]-media), 2);  
                
        console.log("som:"+ somatorio);
        
        
        
    }
        

    var desviopadrao = Math.sqrt(somatorio/parseInt(aluno)) ;
    console.log("desvio e: "+desviopadrao);
        
    var x = "A media da turma e " + media + " e do desvio padrao e de " + desviopadrao;
    
    
    $("#pmedia").html(x);
}
