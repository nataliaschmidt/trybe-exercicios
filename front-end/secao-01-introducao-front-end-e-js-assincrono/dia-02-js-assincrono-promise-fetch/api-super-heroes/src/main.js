import Swal from 'sweetalert2';
import './style.css';
import 'animate.css';

// const getImage = document.getElementById('image');
const getHeroName = document.getElementById('name');
const getBtnRandom = document.getElementById('btn-random');
const getStatus = document.getElementById('status');
const getBtnSearch = document.getElementById('btn-search');
const getInput = document.getElementById('input-find-hero');
const getDivCard = document.querySelector('.card');
const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

const MAX_HEROES = 700;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

const statusHero = (obj) => {
    const getImage = document.createElement('img');
    if (window.screen.width > '560') {
        getImage.src = obj.images.md;
    }
    if (window.screen.width <= '560') {
        getImage.src = obj.images.sm;
    }
    getImage.style.backgroundColor = 'white';
    getImage.style.boxShadow = '0px 0px 8px 4px black';
    getImage.style.borderRadius = '20px';
    getImage.style.padding = '15px';
    getImage.classList.add('animate__animated', 'animate__flip');
    getDivCard.appendChild(getImage);
    getHeroName.innerHTML = obj.name.toUpperCase();
    console.log(obj);
    const { powerstats:
        { combat, durability, intelligence, power, speed, strength } } = obj;
    getStatus.innerHTML = `Combat: ${combat}
  Durability: ${durability}
  Inteligence: ${intelligence}
  Power: ${power}
  Speed: ${speed}
  Strength: ${strength}`;
};

getBtnRandom.addEventListener('click', (event) => {
    event.preventDefault();
    const id = randomId();
    fetch(`${BASE_URL}/${id}.json`)
        .then((result) => result.json())
        .then((data) => {
            statusHero(data);
        })
        .catch((error) => Swal.fire({
            title: 'Hero not found',
            text: error.message,
            color: '#2b2d42',
            background: '#d8e2dc',
            icon: 'error',
            position: 'center',
            confirmButtonText: 'Ok',
        }));
});

getBtnSearch.addEventListener('click', async () => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
    const data = await response.json();
    // console.log(data);
    const findHeroes = data
        .find((hero) => getInput.value.toLowerCase() === hero.name.toLowerCase());
    // console.log(findHeroes);
    if (findHeroes === undefined) {
        Swal.fire({
            title: 'Hero not found',
            color: '#2b2d42',
            background: '#d8e2dc',
            icon: 'error',
            position: 'center',
            confirmButtonText: 'Ok',
        });
        getInput.value = ''
    } else {
        statusHero(findHeroes);
        getInput.value = ''
    }
});
