
import validator from 'validator';

// Variáveis
const getInput = document.getElementById('input');
const getBtn = document.getElementById('button');
const getSeletor = document.getElementById('option');
const getAnswer = document.getElementById('answer');

getBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Aqui, criamos um objeto cujas chaves são os tipos a
  // serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.
  const options = {
    cpf: validator.isTaxID(getInput.value, 'pt-BR'),
    estaEmBranco: validator.isEmpty(getInput.value),
    email: validator.isEmail(getInput.value),
    isDate: validator.isDate(getInput.value),
    url: validator.isURL(getInput.value),
    isDivisible: validator.isDivisibleBy(getInput.value, 2),
    isLowerCase: validator.isLowercase(getInput.value),
  };

  // O objeto 'campos' possui as chaves com o mesmo nome
  // das opções do seletor em nossa página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  getInput.value = ''
  getAnswer.innerHTML = `A validação retornou ${options[getSeletor.value]}`;
});