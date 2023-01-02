// Variáveis
const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
//console.log(body);

// Cor do Fundo
const backgroundColor = document.getElementsByClassName('btn-background');
for (let index = 0; index < backgroundColor.length; index += 1) {
backgroundColor[index].addEventListener('click', () => {
    body.style.backgroundColor = backgroundColor[index].innerHTML;
    localStorage.setItem('backgroudCOlor', backgroundColor[index].innerHTML)
})
}

// Cor da Fonte
const color = document.getElementsByClassName('btn-font-color');
for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', (event) => {
        main.style.color = event.target.innerHTML;
        localStorage.setItem('color', event.target.innerHTML)
    })
}

// Tamanho da Fonte
const fontSize = document.getElementsByClassName('btn-font-size');
for (let index = 0; index < fontSize.length; index += 1) {
    fontSize[index].addEventListener('click', (event) => {
        main.style.fontSize = event.target.innerHTML;
        localStorage.setItem('fontSize', event.target.innerHTML)
    })
}

// Espaçamento das Linhas

const lineHeigth = document.getElementsByClassName('btn-line-spacing');
for (let index = 0; index < lineHeigth.length; index += 1) {
lineHeigth[index].addEventListener('click', (event) => {
    main.style.lineHeight = event.target.innerHTML;
    localStorage.setItem('lineHeigth', event.target.innerHTML)
})
}

// Tipo da Fonte
const fontFamily = document.getElementsByClassName('btn-font-family');
for (index = 0; index < fontFamily.length; index += 1) {
    fontFamily[index].addEventListener('click', (event) => {
        main.style.fontFamily = event.target.innerHTML;
        localStorage.setItem('fontFamily', event.target.innerHTML)
    })
}

const initialization = () => {
    if (localStorage.length !== null){
body.style.backgroundColor = localStorage.getItem('backgroudCOlor');
main.style.color = localStorage.getItem('color');
main.style.fontSize = localStorage.getItem('fontSize');
main.style.lineHeight = localStorage.getItem('lineHeigth');
main.style.fontFamily = localStorage.getItem('fontFamily');
    }
}
initialization();
