// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>


const input = document.getElementById("gifInput")
const btn = document.querySelector("#gifButton")
const div = document.getElementById("root")

btn.addEventListener("click", (e) => fazerFetch(e))

function fazerFetch(event) {
    event.preventDefault()
    div.innerHTML = ""
    input.innerHTML = ""
    const valorInput = input.value 
    console.log("lala");
    
    const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=10&offset=0`

   fetch(url) 
   .then( resposta => resposta.json())
   .then( json => mostrarResultado(json))
   .catch (e => console.error(e))
   
   }

   function mostrarResultado(json) {
      const arr = json.data 
      arr.forEach(element => {
          document.createElement("img")
          const imgPrint = element.images.original.url
          div.appendChild("imgPrint")
          
      });
   }