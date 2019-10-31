// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root



const input = document.getElementById("gifInput")
const form = document.getElementById("form")
const div = document.getElementById("root")


form.addEventListener("submit", function(evento){
    
    evento.preventDefault()
    div.innerHTML = "   "
    let  valorInput = input.value
    input.value = ""
    console.log(valorInput)

    const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=10&offset=0`
    
    
    const request = new XMLHttpRequest()
    request.onreadystatechange = mostraGifs 
    request.open("GET", url)
    request.send()
    
        function mostraGifs(){
            if (request.readyState === 4 && request.status === 200) {
                const response = request.response
                const json = JSON.parse(response)
                console.log(json)
                const arrayData = json.data;


                    for (let i = 0; i < arrayData.length; i++) {
                        const image = arrayData[i].images.original.url;
                        div.innerHTML += `
                        <img src=${image}>
                        `                    
                }              
                                 
            } else {
                const status = request.status
                const statusMsg = request.statusText
                console.log("meu console loggg");                
                console.error("este é meu console errooouuuu" , status, statusMsg )
                console.warn("exite um console warnnnn");

                div.innerHTML = `
                <h1> +
                `
                

            }
    
    
        }  

})    




    
