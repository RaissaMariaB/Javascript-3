// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [x] template string


const body = document.body
const btn = document.getElementById("trocaCor")
// body.style.backgroundColor = "purple"

function mudaCor(){
    let number = parseInt(Math.random() *255)

    return number
}

btn.addEventListener("click", function(){
    let R = mudaCor() //parseInt(Math.random() *255)
    let G =  mudaCor()// parseInt(Math.random() *255)
    let B = mudaCor() //parseInt(Math.random() *255)
    let RGB = `RGB(${R},${G},${B})`

    body.style.backgroundColor = RGB

    console.log(RGB); 
    
})

