
const verifyNumber = (value1, value2) => {
  const number = /\d/
  if (!value1 || !value2) throw new Error('Você deve digitar um valor');
  if (isNaN(value1) || isNaN(value2)) throw new Error('Digite um valor numérico');
}


function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyNumber(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
    document.getElementById('result').style.color = 'red'
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

const button = document.getElementById('button');
button.addEventListener('click', sum);


      // Há também outras formas de se converter uma string em um número, como o parseInt() e o parseFloat();
