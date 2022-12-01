

function change_image(){

   
    const processador =$("#processador").val();

  switch (processador) {
    case '1':
        img.src = '/assets/Processador/pentium7gen.png'
        $("#teste").hide();
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
        function testediv(){
  const teste =$("#teste").val();
  
const a= document.createElement('a')

a.textContent='a';

  teste.append(a);

  document.getElementById("teste").textContent = 
  document.getElementById("teste").innerHTML  


}
        break;
    default: 
      console.log(`Sorry, we are out of ${expr}.`);

    } 

      
      
}
// document.getElementById("enviar").onclick = function (){
//      $(".PROCESSADOR_DIV").hide();
//  }









