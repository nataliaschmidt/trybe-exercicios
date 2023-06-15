const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app')

const { expect } = chai;
chai.use(chaiHttp);

// importando para criar um stub para a função readFile() do fs
const sinon = require('sinon');
const fs = require('fs')

//usamos o JSON.stringify() para transformar os dados em JSON, no mesmo formato em que a função readFile retornaria o arquivo JSON.
const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});


describe('Testando a API Cacau Trybe', function () {

  //  importamos o módulo fs e, então, usamos o sinon para criar um stub que será utilizado na função readFile(). Essa retornará o mockFile contendo todo os dados que estavam no arquivo CacauTrybeFile.json, conforme especificamos na chamada para resolves.

  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(sinon.restore);
  /////////////////////////////////////////////////////////////////////////////////
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates', async function () {

      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);

    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ totalChocolates: 4 });
    });
  });

  describe('Usando o método GET em /chocolate/search', function () {
    it('Retorna os chocolates que contém "Mo" no nome', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(
        [
          {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
          },
          {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
          },
        ]);
    });
    
    it('Retorna um array vazio quando não encontra nenhum chocolate', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=ZZZ');
  
      expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const response = await chai.request(app).put('/chocolates/1').send({
          "name": "Mint Pretty Good",
          "brandId": 2
      });

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.be.deep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    });

    it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/555').send({
        name: 'Mint Pretty Good',
        brandId: 2,
        });
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'chocolate not found',
      });
    });
  })
});