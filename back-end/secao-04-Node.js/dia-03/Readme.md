Definindo o Contrato

A API Cacau Trybe será composta por três endpoints, representados pelos seguintes contratos:

👉 GET /chocolates

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: 200 - OK;
- Body (exemplo):
```bash
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

👉 GET /chocolates/:id

- Objetivo: Buscar um chocolate específico pelo ID.
- Código HTTP: 200 - OK;
- Body (exemplo):
```bash
  [
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

👉 GET /chocolates/brand/:brandId

- Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
- Código HTTP: 200 - OK;
- Body (exemplo):
```bash
  [
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```

👉 GET /chocolates/total

- Objetivo: Retornar a quantidade de tipos de - chocolates que existem.
- Código HTTP: 200 - OK;
- Body (exemplo):
```bash
{
  "totalChocolates": 4 // quantidade de chocolates na base de dados
}
```

👉 GET /chocolates/search?name=Mo

- Objetivo: Retornar os chocolates que contém o termo pesquisado;
- Parâmetros de consulta (query params):
  - name,
  - tipo string;
- Código HTTP: 200 - OK;
- Body (exemplo):
```json
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
  }
]
```

👉 GET /chocolates/search?name=ZZZ

- Objetivo: Retornar um array vazio quando não há chocolates que contenham o termo pesquisado;
- Parâmetros de consulta (query params):
  - name,
  - tipo string;
- Código HTTP: 404 - Not Found;
- Body (exemplo):
```json
[]
```

👉 PUT /chocolates/1

- Objetivo: Atualizar um chocolate que existe na base de dados.
- Body da requisição (exemplo):
```bash
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```
- Código HTTP: 200 - OK;
- Body da resposta (exemplo):
```bash
{
  "chocolate": { 
    "id": 1,
    "name": "Mint Pretty Good",
    "brandId": 2
  }
}
```
👉 PUT /chocolates/555

- Objetivo: Retornar uma mensagem de erro quando não há um chocolate com a id passada.
- Body da requisição (exemplo):
```bash
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```
- Código HTTP: 404 - Not Found
- Body da resposta (exemplo):
```bash
{ 
  "message": "chocolate not found"
}
```

