const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// função para adicionar o turno da noite na lesson2

const addTurn = (obj, key, value) => {
  obj[key] = value;
  return obj
}

console.log(addTurn(lesson2, 'turno', 'noite'));
console.log('---------------------------------------------------------------------------------------------');


// Crie uma função para listar as keys de um objeto.

const keyList = (obj) => Object.keys(obj);

console.log(keyList(lesson3));
console.log('---------------------------------------------------------------------------------------------');

// Crie uma função para mostrar o tamanho de um objeto.
const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson2));
console.log('---------------------------------------------------------------------------------------------');

// Crie uma função para listar os valores de um objeto.

const valueList = (obj) => Object.values(obj);

console.log(valueList(lesson1));
console.log('---------------------------------------------------------------------------------------------');

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log(allLessons);
console.log('---------------------------------------------------------------------------------------------');

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalnumberStudants = (obj) => {
  let total = 0; // iniciar a contagem de alunos com 0
  const keys = Object.keys(obj); // vamos pegar as chaves do objeto [ lesson1, lesson2, lesson3 ] -> retorna um array
  // console.log(keys);
  for (index in keys) { //for in para iterar sobre o array de chaves 
    // console.log(keys[index]);// -> lesson1, lesson2, lesson3
    // console.log(obj[keys[index]]); -> vou conseguir acesso a cada um dos objetos

    // console.log(obj[keys[index]]['numeroEstudantes']) // 20, 20, 10.. acessando o número de estudantes keys index do obj parâmetro 

    total += obj[keys[index]]['numeroEstudantes'];
  }
  return total;
}
console.log(`Total de alunos é: ${totalnumberStudants(allLessons)}`);
console.log('---------------------------------------------------------------------------------------------');

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const getValue = (obj, number) => {
  // Object.values vai retornar um array com os valores do objetos, posso utilizar o [index] para acessar o valor que eu quero daquele array
  return Object.values(obj)[number]
}

console.log(getValue(lesson1, 2));
console.log('---------------------------------------------------------------------------------------------');

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, chave, valor) => {
  // armazenar as entradas do objeto em uma variável
  const entries = Object.entries(obj); // retorna um array de array no qual cada conjunto possui a chave e o valor do objeto
  // console.log(entries);
  let isEqual = false;

  for (let index in entries) {
    console.log(entries[index]);
    if (entries[index][0] === chave && entries[index][1] === valor) isEqual = true
    // se matéria for igual a chave passada e Matemática for igual ao valor passado retorna true
  }
  return isEqual;

}
console.log(verifyPair(lesson1, 'turno', 'tarde'));
console.log('---------------------------------------------------------------------------------------------');

// ------------------------------------------------ // --------------------------------------------------------- //

//  EXERCÍCIO BÔNUS

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

const studantsMath = (obj) => {
  let total = 0;
  const keys = Object.keys(obj); // retorna o array [lesson1, lesson2, lesson3]

  for (index in keys) {
    // console.log(obj[keys[index]].materia);
    if (obj[keys[index]].materia === 'Matemática') {
      total += obj[keys[index]].numeroEstudantes;
    }
  }
  return total;
}

console.log(studantsMath(allLessons));
console.log('---------------------------------------------------------------------------------------------');

// Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const values = Object.values(obj);
   // console.log(values);
   for (index in values) {
    if (values[index].professor === name) {
      // console.log(`essa é a matéria ${array[index].materia}`);
      // console.log(`esses são os estudantes ${array[index].numeroEstudantes}`);
      allLessons.push(values[index].materia)
      allStudent += values[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));