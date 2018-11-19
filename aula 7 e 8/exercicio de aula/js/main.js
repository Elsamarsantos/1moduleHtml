$( document ).ready(function() {
    console.log( "ready!" );
    $( "#target" ).click(function() {
        
        $('h1').css('color','blue'); 
        $('.imagem').html(getImage('https://www.infoescola.com/wp-content/uploads/2009/03/labrador_255387970.jpg'));
    });
    $( '#btn1').click(function() {
        $('h1').css('color','purple'); 
        $('.imagem').html(getTable());
    });
});

function getImage(srcImage,altImage) {
    
    return `<img src="${srcImage}" height="500px">`;
    
}
function getTable() {
    return `<table style="width:100%">
    <tr>
      <th>Fase</th>
      <th>Peso ideal</th> 
      <th>Quantidade de racao (g)</th>
    </tr>
    <tr>
      <td>Cachorro</td>
      <td></td> 
      <td>775</td>
    </tr>
    <tr>
      <td>Adulto</td>
      <td>Jackson</td> 
      <td>390</td>
    </tr>
  </table>`
}