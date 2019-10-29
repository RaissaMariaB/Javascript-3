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

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener('click', () => {
  const r = geraInteiro(255);
  const g = geraInteiro(255);
  const b = geraInteiro(255);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

geraInteiro = num => parseInt(Math.random() * num);
