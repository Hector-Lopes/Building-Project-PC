

function change_image(){

    var imagem = $("#imagem").val(); console.log(imagem);
  var processador =$("#processador").val();

  switch (processador) {
    case 'Pentiu':
        img.src = '/assets/Processador/pentium7gen.png'
      break;
    case 'I3':
        img.src = '/assets/Processador/i3.png'
    break;   
    case 'I5':
        img.src = '/assets/Processador/i5.png'
    break;
    case 'I7':
        img.src = '/assets/Processador/i7.png'
    break;
    case 'I9':
        img.src = '/assets/Processador/i9.png'
        break;
    default: 
      console.log(`Sorry, we are out of ${expr}.`);


}



}


