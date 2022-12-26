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

// 1 - Função para criar os dias do mês com suas respectivas classes
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
        }
    }
}

// 2 - Função para criar um botão com o nome feriados
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

// 3 - Função para alterar cor de fundo dos feriados

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

// 4 - Função botão sexta feira
const btnFriday = () => {
    const divBtn = document.querySelector('.buttons-container');
    const btnFriday = document.createElement('button');
    btnFriday.id = "btn-friday"
    btnFriday.innerHTML = "Sexta-feira"
    divBtn.appendChild(btnFriday);
}

// 5 - Criar uma função que modifique o texto da sexta feira

const friday = (fridayDayArray) => {
    const btnFriday = document.getElementById('btn-friday')
    const fridayDay = document.querySelectorAll('.friday');
    const text = "It's Friday 🎉"

    btnFriday.addEventListener('click', () => {
        for (let index = 0; index < fridayDay.length; index += 1) {
            if (fridayDay[index].innerHTML !== text) {
                fridayDay[index].innerHTML = text;
            }
            else {
                fridayDay[index].innerHTML = fridayDayArray[index];
            }
        }
    })

}

// 6 - Funções de Zoom

const mouseOver = () => {
    let days = document.querySelector('#days'); //vai atuar na ul que contém a lista
    days.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px'
        event.target.style.fontWeight = '600';

    });
}

const mouseOut = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
}

// 7 - Adição de tarefa
const addTask = (task) => {
    const myTask = document.querySelector('.my-tasks')
    const elemento = document.createElement('span');
    elemento.innerHTML = task;
myTask.appendChild(elemento);
}

// 8 - função que adicione uma legenda com cor para a tarefa

const legend = (color) => {
    const myTask = document.querySelector('.my-tasks')
    const task = document.createElement ('div');
    task.className = 'task';
    task.style.backgroundColor = color;
    myTask.appendChild(task);

}

// 9 - Função para selecionar a tarefa

const setTaskClass = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', (event) => {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }

// 10 - Implementar cor da tarefa ao calendário
const setDayColor = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      }
    });
  }
  
  // 11 - adicionando compromissos ao calendário.

  const addNewTask = () => {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', () => {
      if (getInputField.value.length !== ' ') {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();
  

// Chamada das Funções
createDaysOfTheWeek();
createDaysOfTheMonth();
btnHoliday();
btnBackgroundColorHoliday();
btnFriday();
friday([4, 11, 18, 25]);
mouseOver();
mouseOut();
addTask('cozinhar');
legend('#119da4');
setTaskClass();
setDayColor();
addNewTask();