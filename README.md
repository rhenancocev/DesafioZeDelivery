# ZeDeliveryDesafio

# Ferramentas e linguagens utilizadas no projeto

* Visual Studio
* Postman para chamadas REST
* Mongo DB
* NodeJS
* Docker
* Atlas para instanciar o MongoDB em um cluster na AWS


# Rotas

| Rotas                                         | Descrição                                    | Metodos HTTP     | parametros e tipos  |
|-----------------------------------------------|------------------------------------------------|------------------|------------------|
| /api/cadastro/criarParceiro                                | Cria um parceiro no banco de dados	         | POST             |Body JSON 		   |
| /api/consulta/listaId/?id=PARAM                                  | Retorna um determinado parceiro de acordo com o ID informado				 | GET              |id = number		   |
| /api/consulta/listaTodos 	                            | Lista todos os parceiros do BD			     | GET              |Não precisa	   |
| /api/busca/buscaParceiro/?lng=PARAM&lat=PARAM          | Retorna a lista de parceiros mais proximo referente a LNG e LAT informada.       | GET              |lng = floot e lat = floot		   |
|/api                                                | Retorna a documentação de uso das rotas | GET | Não Precisa |


## Exemplo - Criação de parceiro (body params)
#### rota http://localhost:8080/api/cadastro/criarParceiro
#### Request:
```json
{
    "id": "3",
    "tradingName": "Adega da Cerveja - Pinheiros",
    "ownerName": "Zé da Silva",
    "document": "175213212891/0001",
    "coverageArea": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [
                        -46.78253173828125,
                        -23.51362636346272
                    ],
                    [
                        -73.9498,
                        40.7968
                    ],
                    [
                        -73.9737,
                        40.7648
                    ],
                    [
                        -73.958,
                        40.8003
                    ]
                ]
            ],
            [
                [
                    [
                        -73.958,
                        40.8003
                    ],
                    [
                        -73.9498,
                        40.7968
                    ],
                    [
                        -73.9737,
                        40.7648
                    ],
                    [
                        -73.9814,
                        40.7681
                    ],
                    [
                        -73.958,
                        40.8003
                    ]
                ]
            ]
        ]
    },
    "address": {
        "type": "point",
        "coordinates": [
            -50.39389038085937,
            -30.521181707248573
        ]
    }
}
```
#### Respose retornado:
```json
{
    "message": "Dados inseridos com sucesso",
    "dados": {
        "_id": "5ef0d773b8abc8667063f475",
        "id": 3,
        "tradingName": "Adega da Cerveja - Pinheiros",
        "ownerName": "Zé da Silva",
        "document": "175213212891/0001",
        "coverageArea": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            -46.78253173828125,
                            -23.51362636346272
                        ],
                        [
                            -73.9498,
                            40.7968
                        ],
                        [
                            -73.9737,
                            40.7648
                        ],
                        [
                            -73.958,
                            40.8003
                        ]
                    ]
                ],
                [
                    [
                        [
                            -73.958,
                            40.8003
                        ],
                        [
                            -73.9498,
                            40.7968
                        ],
                        [
                            -73.9737,
                            40.7648
                        ],
                        [
                            -73.9814,
                            40.7681
                        ],
                        [
                            -73.958,
                            40.8003
                        ]
                    ]
                ]
            ],
            "_id": "5ef0d773b8abc8667063f476"
        },
        "address": {
            "type": "point",
            "_id": "5ef0d773b8abc8667063f477",
            "coordinates": [
                -50.39389038085937,
                -30.521181707248573
            ]
        },
        "__v": 0
    }
}
```

## Exemplo - Busca de parceiro por ID
#### rota http://localhost:8080/api/consulta/listaId/?id=3
#### Respose retornado:
```json
{
    "_id": "5e681bb2b1c95a25c0b03024",
    "id": 3,
    "tradingName": "Adega da Cerveja - Pinheiros",
    "ownerName": "Zé da Silva",
    "document": "175213212891/0001",
    "coverageArea": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [
                        -46.78253173828125,
                        -23.51362636346272
                    ],
                    [
                        -73.9498,
                        40.7968
                    ],
                    [
                        -73.9737,
                        40.7648
                    ],
                    [
                        -73.958,
                        40.8003
                    ]
                ]
            ],
            [
                [
                    [
                        -73.958,
                        40.8003
                    ],
                    [
                        -73.9498,
                        40.7968
                    ],
                    [
                        -73.9737,
                        40.7648
                    ],
                    [
                        -73.9814,
                        40.7681
                    ],
                    [
                        -73.958,
                        40.8003
                    ]
                ]
            ]
        ],
        "_id": "5e681bb2b1c95a25c0b03025"
    },
    "address": {
        "type": "point",
        "_id": "5e681bb2b1c95a25c0b03026",
        "coordinates": [
            -50.39389038085937,
            -30.521181707248573
        ]
    },
    "__v": 0
}
```

## Exemplo - Busca parceiro (query params)
#### rota http://localhost:8080/api/busca/buscaParceiro/?lng=-47.2345&lat=-22.1857
#### O Respose retornado será um array com todos os parceiros que estão na proximidade informada (lng e lat), Exemplo de retorno:
```json
{
        "_id": "5ef0ef9784ebb863306308d5",
        "id": 23,
        "tradingName": "Adega da Cerveja - Pinheiros",
        "ownerName": "Zé da Silva",
        "document": "1432132123891/0001",
        "coverageArea": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            30,
                            20
                        ],
                        [
                            45,
                            40
                        ],
                        [
                            10,
                            40
                        ],
                        [
                            30,
                            20
                        ]
                    ]
                ],
                [
                    [
                        [
                            15,
                            5
                        ],
                        [
                            40,
                            10
                        ],
                        [
                            10,
                            20
                        ],
                        [
                            5,
                            10
                        ],
                        [
                            15,
                            5
                        ]
                    ]
                ]
            ],
            "_id": "5ef0ef9784ebb863306308d6"
        },
        "address": {
            "type": "Point",
            "_id": "5ef0ef9784ebb863306308d7",
            "coordinates": [
                -46.57421,
                -21.785741
            ]
        },
        "__v": 0,
        "dist": 81410.62883647143
    }

```

## Exemplo - Lista todos os parceiros
#### rota http://localhost:8080/api/consulta/listaTodos

obs: Lista tudo que estiver no BANCO.

## Exemplo - Manual API 
#### rota http://localhost:8080/api
```json
{
    "title": "Backend Desafio Ze Delivery",
    "version": "0.0.1",
    "help": "Rhenan Cocev",
    "resourceMethods": {
        "/cadastro/CriarParceiro": "Chame /cadastro/CriarParceiro para criar um parceiro",
        "/consulta/listaId/?id=PARAM": "Chame /consulta/listaId/?id=PARAM para listar um determinado parceiro",
        "/consulta/listaTodos": "Chame /consulta/listaTodos para listar todos os parceiros do banco",
        "/busca/buscaParceiro/?lng=PARAM&lat=PARAM": "Chame /busca/buscaParceiro/?lng=PARAM&lat=PARAM passando os parametros, para buscar um parceiro nas proximidades, dada lng e lat"
    }
}
```


## Instrução para instalar
### Windows, linux e MacOS
#### Primeiro instalar o Visual Studio e o NodeJS
* [Visual Studio](https://visualstudio.microsoft.com/pt-br/downloads/) [SUGESTÃO DE IDE]
* [NodeJS](https://nodejs.org/en/download/) [SUGESTÃO CASO NÃO QUEIRA INICIAR A APLICAÇÃO PELO DOCKER]
* [Docker](https://www.docker.com/products/docker-desktop) [SUGESTÃO CASO QUEIRA INICIAR A APLICAÇÃO PELO DOCKER]
* [Postman](https://www.postman.com/downloads/) [SUGESTÃO DE SOFTWARE PARA CHAMADA DAS API'S]
---------------------------------------------------------------------------
#### Clonar este projeto
	git clone git@github.com:rhenancocev/DesafioZeDelivery.git
---------------------------------------------------------------------------
#### Rode a aplicação
 - Dentro do diretorio local (MASTER), executar o comando "docker-compose up" no terminal e aguardar subir a aplicação (node/banco).
 
 - Aguardar receber as seguintes mensagens no console: "API Rodando..." e "Banco de dados conectado..." 
 
 - Utilizar o POSTMAN ou qualquer outro programa para realizar as chamadas das API's.
 
 - Para descer a aplicação, basta executar o comando "docker-compose down -v".
---------------------------------------------------------------------------
