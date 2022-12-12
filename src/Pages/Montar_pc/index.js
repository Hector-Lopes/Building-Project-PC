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
  const teste = $VLores.map((elemento, indice) => {
    const divId = document.querySelector("#tabela");

    divId.innerHTML += ` 
      <div id="form">
      <div id="foto">
      <img id="img"   src="${elemento.imagem}" >
      </div>  
      <option value="${elemento.nomePeca}">${elemento.nomePeca}</option> 

      </form> 
     </div>
      `;
  });
}

function change_image() {
  const processador = $("#formu").val();

  switch (processador) {
    case "Processador":
    
      break;
    case "Placa Mãe":
      trocaformularios();
      $(".pc").hide();
      break;
    case "Placa de Video":
      trocaformularios();
      $(".pc").hide();
      break;
    case "Memoria Ram":
      trocaformularios();
      $(".pc").hide();
      break;
    case "SSHD":
      trocaformularios();
      $(".pc").hide();
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
}

//TIRAR A FUNÇÃO DO FECTH
