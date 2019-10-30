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
// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const div = document.querySelector('#root');
const url = './data/dados.json';

const req = new XMLHttpRequest();
req.open('GET', url);
req.send();

req.onreadystatechange = pegarDados;

function pegarDados() {
  if (req.readyState === 4) {
    if (req.status === 200) {
      const response = req.response;
      const json = JSON.parse(response);
      const data = json.data;
      // criarImagens(data);
      // criarImagensFor(data);
      // criarImagensForEach(data);
      criarImagensForOf(data);
    }
  }
}


function criarImagens(array) {
  div.innerHTML += `
  <img src=${array[0].imagem} >
  <img src=${array[1].imagem} >
  <img src=${array[2].imagem} >
  `
}

function criarImagensFor(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const img = `<img src=${element.imagem}>`;
    div.innerHTML += img
  }
}

function criarImagensForEach(array) {
  array.forEach(element => {
    console.log(element);
    const img = `<img src=${element.imagem}>`;
    div.innerHTML += img;
  });
}

function criarImagensForOf(array) {
  for (const posicao of array) {
    // const img = `<img src=${posicao.imagem}>`;
    // div.innerHTML = img;
    const img = document.createElement('img');
    img.src = posicao.imagem;
    div.appendChild(img);
  }
}