const { encode, decode } = require('./mapString.js')

describe('Testa as funções encode e decode', () => {
  it('encode é uma funçao', () => {
    expect(typeof encode).toBe('function')
  })
  it('decode é uma funçao', () => {
    expect(typeof decode).toBe('function')
  })

  it('se as vogais são convertidas corretamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  })
  it('se os números são convertidas corretamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  })
  it('se as demais letras não são convertidas', () => {
    expect(decode('b, c, d, h, v')).toBe('b, c, d, h, v')
  })
  it('se os demais números não são convertidos não são convertidas', () => {
    expect(encode('6, 7, 20, 15')).toBe('6, 7, 20, 15')
  })
  it('se a string passada por parametro tem o mesmo tamanho do retorno', () => {
    expect(decode('teste').length).toBe(5)
  })
  it('se a string passada por parametro tem o mesmo tamanho do retorno', () => {
    expect(decode('1234').length).toBe(4)
  })
})