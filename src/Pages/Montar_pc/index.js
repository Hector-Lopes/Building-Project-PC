

function change_image(){

   
    const processador =$("#processador").val();

  switch (processador) {
    case 'Pentium':
        img.src = '/assets/Processador/pentium7gen.png'
        $("#teste").hide();
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

var formularios = [
  {     
      nome : "Processador",
      peca1 : "Pentium",
      peca2 : "I3",
      peca3 : "I5",
      peca4 : "I7",
      peca5 : "I9",
  
    }
 
];
function trocaformularios(){
  
  var  Chooseform= formularios.map(function(item, indice){     
    return ` <form >
    <label  for="processador">Escolha o Processador</label>
    <select onchange="change_image()" name="processador" id="processador">
      <optgroup label="Intel">
        <option value= "${item.peca1}" >${item.peca1}</option>
        <option value="${item.peca2}">${item.peca2}</option>
        <option value="${item.peca3}">${item.peca3}</option>
        <option value="${item.peca4}">${item.peca4}</option>
        <option value="${item.peca5}">${item.peca5}</option>
      </optgroup>
      <optgroup label="AMD">
        <option value="Ryzen3">Ryzen 3</option>
        <option value="Ryzen5">Ryzen 5</option>
        <option value="Ryzen7">Ryzen 7</option>
        <option value="Ryzen9">Ryzen 9</option>
  
      </optgroup>
    </select>`;
  
  
  
          });
  
      document.querySelector("#teste2").innerHTML = Chooseform.join("");
 


}




