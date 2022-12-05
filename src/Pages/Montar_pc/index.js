

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
    trocaformularios()
        break;
    case 'I7':
        img.src = '/assets/Processador/i7.png'
    break;
    case 'I9':
        img.src = '/assets/Processador/i9.png'
//         function testediv(){
//           const teste =$("#teste").val();
  
//           const a= document.createElement('a')

// a.textContent='a';

//   teste.append(a);

//   document.getElementById("teste").textContent = 
//   document.getElementById("teste").innerHTML  


// }
        break;
    default: 
      console.log(`Sorry, we are out of ${expr}.`);

    } 

      
      
}
// document.getElementById("enviar").onclick = function (){
//      $(".PROCESSADOR_DIV").hide();
//  }




function trocaformularios(Chooseform){
//array objstos
const vlores = [
  {
    nomePeca: "",
    preco: "",
    quantidade: ""
  },
  {
    nomePeca: "",
    preco: "",
    quantidade: ""
  },
  {
    nomePeca: "",
    preco: "",
    quantidade: ""
  }
]


  
  var  Chooseform= vlores.map(function(item,){     
    return ` <form >
    <label  for="processador">Escolha o Processador</label>
    <select onchange="change_image()" name="processador" id="processador">
      <optgroup label="Intel">
        <option value="${vlores[1].nomePeca}">${vlores[1].nomePeca}</option>
        <option value="${vlores[2].nomePeca}">${vlores[2].nomePeca}</option>
        <option value="${vlores[3].nomePeca}">${vlores[3].nomePeca}</option>
        <option value="${vlores[4].nomePeca}">${vlores[4].nomePeca}</option>
        <option value="${vlores[5].nomePeca}">${vlores[5].nomePeca}</option>
      </optgroup>
      <optgroup label="AMD">
        <option value="Ryzen3">Ryzen 3</option>
        <option value="Ryzen5">Ryzen 5</option>
        <option value="Ryzen7">Ryzen 7</option>
        <option value="Ryzen9">Ryzen 9</option>
  
      </optgroup>
    </select>`;
  
  
  
          });
  
      document.querySelector("#teste2").innerHTML = Chooseform;
 
return trocaformularios();

}




