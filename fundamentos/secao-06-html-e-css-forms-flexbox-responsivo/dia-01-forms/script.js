// Variáveis

const btnSubmit = document.getElementById('submit');
const btnCheckboxPermission = document.getElementById('checkbox-permissao');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputAnswer = document.getElementById('text-resposta');



const validadeCharactersInputs = () => {
  const invalidName = inputName.value.length < 10 || inputName.value.length > 40;
  const invalidEmail = inputEmail.value.length < 10 || inputEmail.value.length > 50;
  const invalidTextArea = inputAnswer.value.length < 10 || inputAnswer.value.length > 500;

  if (invalidName || invalidEmail || invalidTextArea) {
    window.alert('Dados inválidos')
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
};

const enableBtnSubmit = () => {
  btnSubmit.disabled = !btnCheckboxPermission.checked;
};
btnCheckboxPermission.addEventListener('change', enableBtnSubmit)

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  validadeCharactersInputs();
});