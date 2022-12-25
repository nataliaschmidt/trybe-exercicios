// Criação das Funcões

const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

// Função para criar os dias do mês com suas respectivas classes
const createDaysOfTheMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulDays = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const date = decemberDaysList[index];
        const dateListItem = document.createElement('li');
        dateListItem.className = "day"
        dateListItem.innerHTML = date
        ulDays.appendChild(dateListItem);

        if (date === 24 || date === 31) dateListItem.classList.add('holiday');
        else if (date === 4 || date === 11 || date === 18) dateListItem.classList.add('friday');
     else if (date === 25) {
        dateListItem.classList.add('holiday');
        dateListItem.classList.add('friday');
    }}
}

// Função para criar um botão com o nome feriados
const btnHoliday = (feriados) => {
    const divBtn = document.querySelector('.buttons-container')
    const btn = document.createElement('button');
    btn.id = 'btn-holiday';
    btn.innerHTML = 'Feriados';
    divBtn.appendChild(btn);
}

// Função criada no gabarito
// const createHolidayButton = (buttonName) => {
//     let buttonContainer = document.querySelector('.buttons-container');
//     let newButton = document.createElement('button');
//     let newButtonID = 'btn-holiday';

//     newButton.innerHTML = buttonName;
//     newButton.id = newButtonID;

//     buttonContainer.appendChild(newButton);
//   }

//   createHolidayButton('Feriados')

// Função para alterar cor de fundo dos feriados

const btnBackgroundColorHoliday = () => {
    const getBtn = document.getElementById('btn-holiday');
    const getHoliday = document.querySelectorAll('.holiday');
    const backgroundColorOrigin = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
    const newColor = 'pink'

    getBtn.addEventListener('click', () => {
        for (index = 0; index < getHoliday.length; index += 1) {
            if (getHoliday[index].style.backgroundColor === newColor) getHoliday[index].style.backgroundColor = backgroundColorOrigin;
            else getHoliday[index].style.backgroundColor = newColor;
        }
    })
}

// Função botão sexta feira
const btnFriday = () => {
    const divBtn = document.querySelector('.buttons-container');
    const btnFriday = document.createElement('button');
    btnFriday.id = "btn-friday"
    btnFriday.innerHTML = "Sexta-feira"
    divBtn.appendChild(btnFriday);
}

// Criar uma função que modifique o texto da sexta feira

const friday = (fridayDayArray) => {
    const btnFriday = document.getElementById('btn-friday')
    const fridayDay = document.querySelectorAll('.friday');
    const text = "It's Friday 🎉"

    btnFriday.addEventListener('click', () => {
        for (let index = 0; index < fridayDay.length; index += 1){
            if (fridayDay[index].innerHTML !== text){
                fridayDay[index].innerHTML = text;
            }
            else {
                fridayDay[index].innerHTML = fridayDayArray[index];
            }
        }
    })

}



// Chamada das Funções
createDaysOfTheWeek();
createDaysOfTheMonth();
btnHoliday();
btnBackgroundColorHoliday();
btnFriday();
friday([4, 11, 18, 25]);