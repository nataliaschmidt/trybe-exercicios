// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const title = document.createElement('h1');
title.innerHTML = `TrybeTrip - Agência de Viagens`
// Adicione a classe title na tag h1 criada;
title.className = 'title'
document.body.appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body;

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main
const sectionCenterContent = document.createElement('section');
sectionCenterContent.className = 'center-content';
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
sectionCenterContent.style.backgroundColor = '#6a994e'
sectionCenterContent.style.color = 'white'
sectionCenterContent.style.textAlign = 'center';
main.appendChild(sectionCenterContent);

// Adicione a tag p como filho do section
const paragraph = document.createElement('p');
paragraph.innerHTML = `TrybeTrip te levando a lugares incríveis`;
sectionCenterContent.appendChild(paragraph);

// Adicione a tag section com a classe left-content como filho da tag main
const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main
const sectionRigth = document.createElement('section');
sectionRigth.className = 'right-content';
// Centralize a section criada no passo 6 (aquele que possui a classe right-content).
sectionRigth.style.marginRight='auto'
sectionRigth.style.textAlign = 'center'
sectionRigth.style.color ='red'
main.appendChild(sectionRigth);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
const imagem = document.createElement('img');
imagem.className = 'small-image';
imagem.src = 'https://picsum.photos/200'
sectionLeft.appendChild(imagem);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section rigth;

const ul = document.createElement('ul');
sectionRigth.appendChild(ul);
const arrayNumber = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',]
for(let index = 0; index < arrayNumber.length; index += 1){
  const li = document.createElement('li');
  li.innerHTML = arrayNumber[index]
  li.style.color = 'white'
  li.style.listStyle = 'none'
  ul.appendChild(li)
}

// Adicione 3 tags h3, todas sendo filhas do main
for (index = 1; index <= 3; index += 1){
  const h3 = document.createElement('h3');
  h3.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quia! Veritatis sit perferendis beatae aspernatur maiores necessitatibus deserunt ipsum ipsa, culpa commodi repellendus quo sint repudiandae accusamus, hic dicta.`
  // Adicione a classe description nas 3 tags h3 criadas;
  h3.className = 'description';
  main.appendChild(h3);
}

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

main.removeChild(sectionLeft);

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

const list = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();
