

function change_image(){

    var imagem = $("#imagem").val(); console.log(imagem);
  var processador =$("#processador").val();

  switch (processador) {
    case '1':
        img.src = '/assets/Processador/pentium7gen.png'
      break;
    case '2':
        img.src = '/assets/Processador/i3.png'
    break;   
    case '3':
        img.src = '/assets/Processador/i5.png'
    break;
    case '4':
        img.src = '/assets/Processador/i7.png'
    break;
    case '5':
        img.src = '/assets/Processador/i9.png'
        break;
    default: 
      console.log(`Sorry, we are out of ${expr}.`);

    } 

}
document.getElementById("enviar").onclick = function (){
     $(".PROCESSADOR_DIV").hide();
 }


function add_mother(){
   //Adiciona um listener no onClick
$('#adicionarEmail').click( () => 
//Pega o ListEmail adiciona um elemento
$('#PROCESSADOR_DIV').append( 
     //cria um elemento li e põe o texto como o valor do input
     $('<form>').text( $('#PROCESSADOR_DIV_GUARDADO').val() ) 
)
);
    
    document.getElementById("PROCESSADOR_DIV").appendChild(li);
    

}




