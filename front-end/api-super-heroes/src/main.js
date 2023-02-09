// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const getImage = document.getElementById('image');
const getHeroName = document.getElementById('name');
const getBtn = document.getElementById('button');
const getStatus = document.getElementById('status')

const BASE_URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id`;

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.
const MAX_HEROES = 750;


const randomId = () => Math.floor(Math.random() * MAX_HEROES);

getBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  // Faremos o fetch utilizando nossa URL e o id gerado
  // pela função. Agora, note que devemos adicionar,
  // além do ID, um '.json' ao final da URL
  fetch(`${BASE_URL}/${id}.json`)
  // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => {
    //  console.log(result.json())
      return result.json()})
    .then((data) => {
      // Uma vez extraído, vamos recuperar as informações
      // que precisamos.
      getImage.src = data.images.md;
      getImage.style.boxShadow = '0px 0px 8px 4px black'
      getImage.style.borderRadius = '20px'
      getImage.style.padding = '15px'
      getHeroName.innerHTML = data.name.toUpperCase();
      const {powerstats: {combat: combat, durability: durability, intelligence: intelligence, power: power, speed: speed, strength: strength}} = data
      getStatus.innerHTML =
      `Combat: ${combat}
      Durability: ${durability}
      Inteligence: ${intelligence}
      Power: ${power}
      Speed: ${speed}
      Strength: ${strength}`
    })
    // Caso haja erro, nós tratamos o mesmo com o .catch()
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      color: '#023047',
      background: 'white',
      icon: 'error',
      position: 'center',
      confirmButtonText: 'Ok',
    }));
});