const myFizzBuzz = require('./myFizzBuzz.js')

describe('Test function myFizzBuzz', () => {
  it('Verifica se retorna o esperado de acordo com o parâmetro recebido', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(13)).toBe(13);
    expect(myFizzBuzz('13')).toBe(false);
  });
});