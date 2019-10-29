// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function



const quero = "dog"
const request = new  XMLHttpRequest()
const url = `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=3&offset=0`
const img = document.getElementById("imagem")
const body = document.querySelector("body")
// let imagem2 =  document.createElement("img")
// let imagem3 =  document.createElement("img")

request.onreadystatechange = mostraGif
request.open("GET", url)
request.send()

function mostraGif(){
    if (request.readyState === 4 && request.status === 200){
        const response = request.response
        const json = JSON.parse(response)
        console.log(json)
        const data = json.data[0].images.original.url
        body.innerHTML = `
        <img src = ${json.data[0].images.original.url}>
        <img src = ${json.data[1].images.original.url}>
        <img src = ${json.data[2].images.original.url}> ` 
        //tamplate literal precisa ser entre crase
        // const data2 = json.data[1].images.original.url
        // const data3 = json.data[2].images.original.url
        // img.src = data
        // imagem2.src = data2
        // imagem3.src = data3
        // body.appendChild(imagem2)
        // body.appendChild(imagem3)
        console.log(json);
        
    }else{
        console.log("erroouuu");
        
    }
}