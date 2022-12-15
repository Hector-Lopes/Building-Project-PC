fetch("./pecas.json")
  .then((response) => response.json())
  .then((vlores) => {
    $VLores = vlores;
    console.log($VLores);
  })
  .catch((err) => {
    console.log(err);
  });

function trocaformularios() {
 
  const processador = $("#formu").val();

  switch (processador) {
    case "Processador":
      const teste = $VLores.map((elemento, indice) => {
        const divId = document.querySelector("#tabela");
       
          divId.innerHTML += ` 
            <div id="form">
            <div id="foto">
            <img id="img"   src="${elemento.imagem}" >
            </div>  
            <option value="${elemento.Tipo="Pentium"}">${elemento.nomePeca}</option> 
      
            </form> 
           </div>
            `;  
          });
          const Sidediv=document.querySelector(".section_2");
          $(".pc").hide();
          Sidediv.innerHTML +=` 
          
          <div class="side_menu">
        
          </div>
          
         `;
       
      break;
    case "Placa Mãe":

      break;
    case "Placa de Video":
     
      break;
    case "Memoria Ram":
      
      break;
    case "SSHD":
           
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
 

  
   
}

function change_image() {
 
}


