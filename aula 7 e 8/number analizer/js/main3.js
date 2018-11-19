$( document ).ready(function() {
   

   $( '#b' ).click(function() {
       $('#poragora').html(contarnumeros());
       
   });

   $ ( '#b2').dblclick(function() {
       var sequence = $('#exemplo').text();
       $('input[type="text"]').val(sequence);
    
   });

   
  

});




function contarnumeros(){
    var obj ={};
    var x = $('#ipt1').val();
    for (i = 0; i < x.length; i++) {
        if (obj[x[i]]== undefined){
            obj[x[i]]=1;
        }
        else{
          obj[x[i]]++;  
        }

    }
   console.log(obj);
   
    
    

    function ObjectLength(obj) {
        var key = "";
        var value = ""; 
        var length = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                ++length;
            }
        }
        return length;
    };
        length = ObjectLength(obj)
            console.log("o objecto tem " + length + " items"); //para debug
        for (let index = 0; index < length; index++) {
            console.log("ready4!"); //para debug
            key = Object.keys(obj)[index];
            value = obj[key];
            var markup = "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        $("table tbody").append(markup);
    }
};

