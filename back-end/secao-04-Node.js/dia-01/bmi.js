const readline = require('readline-sync');
const BMI_MAX_AND_MIN = require('./data');


function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

const calcImc = (weight, height) => {
  const convertHeight = height / 100;
  const imc = weight / (convertHeight ** 2);
  return imc.toFixed(2);
};



const askInfos = () => {
  const weight = readline.questionFloat('Qual o seu peso?(kg)?');
  const height = readline.questionInt('Qual sua altura(cm)?');
  const imc =  calcImc(weight, height);
  const imcResult = handleBMIResult(imc);
  return imcResult
}

console.log(askInfos());