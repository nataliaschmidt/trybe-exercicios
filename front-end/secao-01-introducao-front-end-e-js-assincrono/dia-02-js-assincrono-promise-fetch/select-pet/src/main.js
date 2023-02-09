
// Variaveis

const getBtnDog = document.getElementById('btn-dog');
const getBtnCat = document.getElementById('btn-cat');
const getBtnsurprise = document.getElementById('btn-surprise');
const getImage = document.getElementById('img-pet');

// Adicionando evento ao botão do cão
getBtnDog.addEventListener('click', () => {
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json()) // chamamos o método json para conseguir ter acesso ao resultado da API.
  .then((data) => {
    const petURL = data.message; // variável contendo a url.

    getImage.src = petURL;

  });
});

getBtnCat.addEventListener('click', () => {
  fetch("https://aws.random.cat/meow")
  .then((response) => response.json())
  .then ((data) => {
    const petURL = data.file;

    getImage.src = petURL;
  });
});

getBtnsurprise.addEventListener('click', () => {
  // Promise.any => considera somente o resultado daprimeira promisse resolvida e ignora o resultado caso outra promise seja rejeitada antes.

  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.file || data.message;

    getImage.src = petURL;
  });
});