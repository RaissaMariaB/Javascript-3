// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach


const url = "./data/dados.json"
const request = new XMLHttpRequest()
const body = document.body
// const img = document.createElement("img")


request.onreadystatechange = mostraProfs
request.open("GET", url)
request.send()

function mostraProfs(){
    if(request.readyState === 4 && request.status === 200){
        const response = request.response
        const json = JSON.parse(response)
        console.log(json)
        const data = json.data
        body.innerHTML += `
        <img src = ${data[0].imagem}>
        <img src = ${data[1].imagem}>
        <img src = ${data[2].imagem}>
        `

         for (let index = 0; index < array.length; index++) {
             const element = array[index];
             
         }

    }

}
