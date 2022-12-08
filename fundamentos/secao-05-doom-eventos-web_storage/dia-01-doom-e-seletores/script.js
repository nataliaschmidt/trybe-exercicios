//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();

//Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;
function newText() {
  let future = document.getElementsByTagName('p')[1];
  future.innerHTML = `Daqui 02 anos me vejo trabalhando como desenvolvedora e decolando na minha carreira!`;
}

newText()

//Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109);
function newColor() {
  let newColor = document.getElementsByClassName('main-content')[0];
  newColor.style.background = 'rgb(76,164,109)';
}

newColor();
//Crie e execute uma função que mude a cor do quadrado vermelho para branco;
function midleColor() {
  let midleColor = document.getElementsByClassName('center-content')[0];
  midleColor.style.background = 'white';
}

midleColor()

//Crie e execute uma função que corrija o texto da tag <h1>;
const correctText = () => {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = `Desafio - JavaScript`;
}

correctText()

//Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;
const modifyParagraph = () => {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
modifyParagraph()

//Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
const showParagraphs = () => {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();