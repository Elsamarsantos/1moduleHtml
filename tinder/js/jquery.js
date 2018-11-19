$(document).ready(function(){
var escolherlivros="";


$('#botaopequisar').click(function(){
        
    escolherlivros = $('#iptpesquisa').val();
    buscarlivro(escolherlivros);
});

$('#blike1').click(function(){

    
    
    if((numero+5)%40==0){
        buscarlivro(escolherlivro);
        var result =(numero+5)/40;
        startIndex=40*result;
    }
    buscarinfo();
});

$('#blike2').click(function(){

    
    buscarlivro(escolherlivro);
    
    buscarinfo();
});

$('#blike3').click(function(){

    
    
    buscarlivro(escolherlivro);
    
    buscarinfo();
        
    
});





























});