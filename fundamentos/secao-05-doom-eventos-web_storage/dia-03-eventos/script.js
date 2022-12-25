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

const createDaysOfTheMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulDays = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const date = decemberDaysList[index];
        const dateListItem = document.createElement('li');
        dateListItem.className = "day"
        dateListItem.innerHTML = date
        ulDays.appendChild(dateListItem);
        
        if (date === 24 || date === 25 || date === 31) dateListItem.classList.add('holiday');
else if (date === 4 || date === 11 || date === 18 || date === 25) dateListItem.classList.add('friday');
    }
}



// Chamada das Funções
createDaysOfTheWeek();
createDaysOfTheMonth();