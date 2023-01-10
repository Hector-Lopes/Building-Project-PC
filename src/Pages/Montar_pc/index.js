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
 
  const Droplist = $("#formu").val();

  switch (Droplist) {
    case "Processador":

    let Filtrar_processador = $VLores.filter(function (Filtrado) {
      return Filtrado.Tipo === "Processador";
    })
    // .map(function (Filtrado) {
    //   return Filtrado.nomePeca;
      
    // })
    console.log(Filtrar_processador); 
    const PROCESSADOR = Filtrar_processador.map((elemento, indice) => {
         const divId = document.querySelector("#tabela");


          divId.innerHTML += ` 
            <div id="form">
            <div id="foto_Processador">
            <img id="img"   src="${elemento.imagem}" >
            </div>  
            <option value="${elemento.Tipo}">${elemento.nomePeca}</option> 
      
            </form> 
           </div>
            `;  
           });
         const Sidediv=document.querySelector(".section_2");
          $(".pc").hide();
        $(".side_menu").hide();
          
         
          Sidediv.innerHTML +=` 
          
          <div class="side_menu">
        
          </div>
          
         `;
       
      break;
    case "Placa Mãe":
      let Filtrar_mae = $VLores.filter(function (Filtrado) {
        return Filtrado.Tipo === "MAE";
      })
      // .map(function (Filtrado) {
      //   return Filtrado.nomePeca;
        
      // })
      console.log(Filtrar_mae); 
      const MAE = Filtrar_mae.map((elemento, indice) => {
           const divId = document.querySelector("#tabela");
  
  
            divId.innerHTML += ` 
              <div id="form">
              <div id="foto_mae">
              <img id="img"   src="${elemento.imagem}" >
              </div>  
              <option value="${elemento.Tipo}">${elemento.nomePeca}</option> 
        
              </form> 
             </div>
              `;  
             });
            // const Sidediv_MAE=document.querySelector(".section_2");
            $(".pc").hide();
          // $(".side_menu").hide();
    
         
          //   Sidediv_MAE.innerHTML +=` 
            
          //   <div class="side_menu">
          
          //   </div>
            
          //  `;






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


