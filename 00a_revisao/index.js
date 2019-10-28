// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()


// console.log("olar");
// let body = document.querySelector("body")
// const body = document.getElementsByTagName("body")

// console.log(body);


const body = document.body
const btn = document.getElementById("trocaCor")
// body.style.backgroundColor = "purple"

btn.addEventListener("click", function(){
    let R = parseInt(Math.random() *255)
    let G = parseInt(Math.random() *255)
    let B = parseInt(Math.random() *255)
    let RGB = "RGB(" + R + " , " + G +" , " + B  + ")"

    body.style.backgroundColor = RGB

    console.log(RGB); 
    
})






console.log("entrei na função");