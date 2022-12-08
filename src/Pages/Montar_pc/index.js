fetch('./pecas.json')
.then((response) => response.json())
.then((vlores) => {

console.log(vlores);

function change_image() {
  const processador = $("#formu").val();

  switch (processador) {
    case "Pentium":
      img.src = "/assets/Processador/pentium7gen.png";
      $("#teste").hide();
      break;
    case "I3":
      img.src = "/assets/Processador/i3.png";
      break;
    case "I5":
      img.src = "/assets/Processador/i5.png";
      trocaformularios();
      break;
    case "I7":
      img.src = "/assets/Processador/i7.png";
      break;
    case "I9":
      img.src = "/assets/Processador/i9.png";
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
}
// document.getElementById("enviar").onclick = function (){
//      $(".PROCESSADOR_DIV").hide();
//  }


function trocaformularios() {
  //array objetos
  
  



//   let Chooseform = vlores.map(function () {
//   //  if(index<)

// // console.log(index)
// // console.log(array)
    

//     return ` 
//     <form >
//     <label  for="processador">Escolha o Processador</label>
//       <select onchange="change_image()" name="processador" id="processador">
//         <optgroup label="Intel">
//           <option value="${vlores[0].nomePeca}">${vlores[0].nomePeca}</option>
//           <option value="${vlores[1].nomePeca}">${vlores[1].nomePeca}</option>
//           <option value="${vlores[2].nomePeca}">${vlores[2].nomePeca}</option>
//           <option value="${vlores[3].nomePeca}">${vlores[3].nomePeca}</option>
//           <option value="${vlores[4].nomePeca}">${vlores[4].nomePeca}</option>
//         </optgroup>
//         <optgroup label="AMD">
//           <option value=${vlores[5].nomePeca}>${vlores[5].nomePeca}</option>
//           <option value=${vlores[6].nomePeca}>${vlores[6].nomePeca}</option>
//           <option value=${vlores[7].nomePeca}>${vlores[7].nomePeca}</option>
//           <option value=${vlores[8].nomePeca}>${vlores[8].nomePeca}</option>
    
//         </optgroup>
//       </select>
//     </form> `;
  
//   });


  const teste = vlores.map((e) => {
    const divId = document.querySelector("#teste2")

    divId.innerHTML += `<option value="${e.nomePeca}">${e.nomePeca}</option>`
  })

  console.log(teste)

  // document.querySelector("#teste2").innerHTML = Chooseform;

  // console.log(Chooseform)
}

})
.catch((err) => {
  console.log(err);
})