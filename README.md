<h1 align="center">
	<img src="https://static.depositphotos.com//storage/bgremove/processed_6a5695f7-a8a4-4ad0-82fb-be40f2ec7255_62353e71620e4.png?isize=600" height="250px"/>
</h1>

<h1 align="center">ARAP API</h1>

##  BaseURL 
 https://arap-api.herokuapp.com/

## Endpoint
`Post - /users`

Criar um usuario

`Body`

```json
{
	{
        "email": "alexandreaa13@gmail.com",
        "password": "123456",
        "name": "Alexandre",
        "cpf": "123456",
        "endereco": "Rua tal",
        "numero": "174",
        "cidade": "Cidade tal",
        "estado": "Estado tal",
        "bairro": "Bairro tal"
    }
}
```
`Resposta`

```json
{
    {
        "email": "alexandreaa13@gmail.com",
        "password": "123456",
        "name": "Alexandre",
        "cpf": "123456",
        "endereco": "Rua tal",
        "bairro": "Bairro tal",
        "numero": "174",
        "cidade": "Cidade tal",
        "estado": "Estado tal",
        "avatarUrl": "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=170667a&w=0&h=JlerB4H3IeLolDMQOYiAF9uLuZeW0bs4jH6NdrNPDtE=",
        "historico_pagamentos": [],
        "tipo_user": "Associado",
        "status": "Ativo",
        "createdAt": "2022-03-18T23:23:10.164Z",
        "_id": "6235149812522f0329690802",
        "__v": 0
    }
}
```

`Post /users/login`

Fazer login

`Body`

```json
{
    {
        "cpf": "123456",
        "password": "123456"
    }
}
```
`Resposta`

```json
{
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwYzk1MjEwNGE0YTk5YWVkMzI0NyIsImlhdCI6MTY0NzY0OTkwOCwiZXhwIjoxNjQ3NzM2MzA4fQ.RWtuQGyCyheuM5thVpilNB6nXeu5HuHwpP7UxzIorrY",
        "id": "62350c952104a4a99aed3247",
        "name": "Alexandre",
        "tipo_user": "Associado",
        "status": "Ativo" 
    }
}
```

`Get - /users`

Listar todos os usuarios

`Resposta`

```json
{
    [
	    {
            "_id": "62350c952104a4a99aed3247",
            "email": "alexandreaa13@gmail.com",
            "name": "Alexandre",
            "cpf": "123456",
            "endereco": "Rua tal",
            "bairro": "Bairro tal",
            "numero": "174",
            "cidade": "Cidade tal",
            "estado": "Estado tal",
            "avatarUrl": "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=170667a&w=0&h=JlerB4H3IeLolDMQOYiAF9uLuZeW0bs4jH6NdrNPDtE=",
            "historico_pagamentos": [],
            "tipo_user": "Associado",
            "status": "Ativo",
            "createdAt": "2022-03-18T22:49:17.236Z",
            "__v": 0
	    }
        ...
    ]
}
```
`Get - /users/:id`

Listar apenas um usuario

```json
{
	{
        "_id": "62350c952104a4a99aed3247",
        "email": "alexandreaa13@gmail.com",
        "name": "Alexandre",
        "cpf": "123456",
        "endereco": "Rua tal",
        "bairro": "Bairro tal",
        "numero": "174",
        "cidade": "Cidade tal",
        "estado": "Estado tal",
        "avatarUrl": "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=170667a&w=0&h=JlerB4H3IeLolDMQOYiAF9uLuZeW0bs4jH6NdrNPDtE=",
        "historico_pagamentos": [],
        "tipo_user": "Associado",
        "status": "Ativo",
        "createdAt": "2022-03-18T22:49:17.236Z",
        "__v": 0
	}
}
```

`Patch - /users/:id`

Alterar algo do usuario </br>
Campos que podem ser alterados: "name", "avatar_url","tipo_user" e "status"
`Body`

```json
{
    {
	"tipo_user": "Gestor"
    }
}
```

`Resposta`

```json
{
    {
        "_id": "6234ca76ae5bbb9048061c7b",
        "email": "alexandre413@gmail.com",
        "name": "Alexandre",
        "cpf": "123456",
        "endereco": "Rua tal",
        "bairro": "Bairro tal",
        "numero": "174",
        "cidade": "Cidade tal",
        "estado": "Estado tal",
        "avatarUrl": "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=170667a&w=0&h=JlerB4H3IeLolDMQOYiAF9uLuZeW0bs4jH6NdrNPDtE=",
        "historico_pagamentos": [],
        "tipo_user": "Gestor",
        "status": "Ativo",
        "createdAt": "2022-03-18T18:07:20.916Z",
        "__v": 0
    }
}
```

`Delete - /users/:id`

Não possui corpo de requisição

`Resposta`

```json
{
    {}
}
```

`Post - /medidores`

Registrar um medidor

`Body`

```json
{
    {
        "codigo": "321",
        "endereco": "rua tal",
        "cidade": "cidade tal",
        "estado": "estado tal",
        "bairro": "bairro tal",
        "numero": "numero tal",
        "idAssociado": "6234b4a7ccded0b4011bd6ae"
    }
}
```

`Resposta`

```json
{
    {
        "codigo": "321",
        "endereco": "rua tal",
        "numero": "numero tal",
        "bairro": "bairro tal",
        "cidade": "cidade tal",
        "estado": "estado tal",
        "cretedAt": "2022-03-18T16:34:21.311Z",
        "idAssociado": "6234b4a7ccded0b4011bd6ae",
        "_id": "6234b523ccded0b4011bd6b2",
        "__v": 0
    }
}
```

`Get - /medidores`

Listar todos os medidores

`Resposta`

```json
{
    [
        {
            "_id": "623538239d2460ff9c5b1758",
            "codigo": "321",
            "endereco": "rua tal",
            "numero": "numero tal",
            "bairro": "bairro tal",
            "cidade": "cidade tal",
            "estado": "estado tal",
            "cretedAt": "2022-03-19T01:55:21.926Z",
            "idAssociado": "6234b4a7ccded0b4011bd6ae",
            "__v": 0
        }
        ...
    ]
}
```

`Get - /medidores/:id`

Listar apenas um medidor

`Resposta`

```json
{
    {
        "_id": "623538239d2460ff9c5b1758",
        "codigo": "321",
        "endereco": "rua tal",
        "numero": "numero tal",
        "bairro": "bairro tal",
        "cidade": "cidade tal",
        "estado": "estado tal",
        "cretedAt": "2022-03-19T01:55:21.926Z",
        "idAssociado": "6234b4a7ccded0b4011bd6ae",
        "__v": 0
    }
}
```

`Patch - /medidores/:id`

Atualizar medidor </br>
Campo que pode ser atualizado: "idAssociado"

`Body`

```json
{
    {
        "idAssociado": "62350c952104a4a99aed3247"
    }
}
```

`Resposta`

```json
{
    {
        "_id": "623538239d2460ff9c5b1758",
        "codigo": "321",
        "endereco": "rua tal",
        "numero": "numero tal",
        "bairro": "bairro tal",
        "cidade": "cidade tal",
        "estado": "estado tal",
        "cretedAt": "2022-03-19T01:55:21.926Z",
        "idAssociado": "62350c952104a4a99aed3247",
        "__v": 0
    }
}
```

`Delete - /medidores/:id`

Deletar um medidor </br>
Não possui corpo de requisição

`Resposta`

```json
{
    {}
}
``` 

`Post - /solicitações`

Criar uma solicitação

`Body`

```json
{
    {
	"title": "Tessdste",
	"description": "Deu ruim",
	"tel": "11993389672"
    }
}
``` 

`Resposta`

```json
{
    {
        "name": "Alexandre",
        "title": "Tessdste",
        "description": "Deu ruim",
        "status": "Pendente",
        "tel": "11993389672",
        "createdAt": "2022-03-19T02:12:47.800Z",
        "_id": "62353c21194d46108c435982",
        "__v": 0
    }
}
``` 

`Patch - /solicitacoes/:id`

Atualizar uma solicitação </br>
Campo para mudar: "Status"

`Body`

```json
{
    {
	"status": "Resolvido"
    }
}
``` 

`Resposta`

```json
{
    {
        "_id": "62333b44ebb3e8523665d8b1",
        "title": "Teste",
        "description": "Deu ruim aqui paizao",
        "status": "Resolvido",
        "createdAt": "2022-03-17T13:36:42.117Z",
        "__v": 0
    }   
}
``` 

`Delete - /solicitações/:id`

Não possui corpo de requisição

`Resposta`

```json
{
    {}   
}
``` 

`Post - /pagamentos`

Gerar um QR code para pagar </br>
Digite a quantidade de metros cubicos que tem no seu medidor/hidrometro

`Body`

```json
{
    {
	    "medidor": 2000
    }   
}
``` 

`Resposta`

```json
{
    {
        "name": "Alexandre",
        "medidor": 2000,
        "valor": 36,
        "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN/SURBVO3BQa7cVgADwe6Huf+VGS+y4EqAIP2x47DK/MLMvw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlw0Mq35SEKyotCU2lJeEJlZaEpvJNSXjiMFMOM+UwUz68LAlvUvkmlZaEpvJEEt6k8qbDTDnMlMNM+fDDVO5Iwh0qLQlN5YpKS8I3qdyRhJ90mCmHmXKYKR/+MiotCVdUmsr/2WGmHGbKYaZ8+J9RaUl4QuVvcpgph5lymCkfflgSfieVKyotCU3lShKeSMKf5DBTDjPlMFM+vEzld0pCU2lJaCp3JKGptCRcUfmTHWbKYaYcZsqHh5LwJ0tCU3lC5Y4k/JccZsphphxmyoeHVFoSmsqbktCS0FRaEq4koam0JDSVO1TelISfdJgph5lymCkfHkpCU3lTEprKlSQ0lZaEJ5LQVJpKS0JTaUm4Q6Ul4U2HmXKYKYeZ8uE3S8IVlTep3KHyhMoVlStJuKLSkvDEYaYcZsphpnz4zVSuJOEOlSeScEXljiQ0lZaEO5LQVN50mCmHmXKYKR8eUnlTEprKE0loKi0JTeVNKldUWhKayjcdZsphphxmyocfloSmckcSmsqVJDSVloSm0pJwh8qVJDSVloSm0pLQVFoS3nSYKYeZcpgpH16WhKbyhEpLwpuS0FRaEprKHSpXVJ5QaUl44jBTDjPlMFM+/GZJuJKEJ5JwRaUloam0JDSVK0loKleScCUJTeVNh5lymCmHmfLhy5Jwh8qbknBF5U0qT6i0JLQkvOkwUw4z5TBTzC/8h6m0JDyh0pLQVK4k4Q6VK0n4psNMOcyUw0z58JDKNyWhJaGpvEmlJaGpXFFpSbiShKZyRxKeOMyUw0w5zJQPL0vCm1SuqLQkXFFpSbii8kQS7lBpSbii8qbDTDnMlMNM+fDDVO5IwhMqd6jcoXJF5YkkNJWWhJaENx1mymGmHGbKh79MEppKS0JTuZKEJ1RaEppKU7miciUJTxxmymGmHGbKh7+MSkvClSRcUbkjCS0JV5LQVK4koam86TBTDjPlMFM+/LAk/KQk3KHSknBHEppKU2lJaCp3JOGbDjPlMFMOM+XDy1S+SeUJlStJuJKEn6TyTYeZcpgph5lifmHmX4eZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5nyD59RaVGNGbxtAAAAAElFTkSuQmCC",
        "createdAt": "2022-03-19T00:20:04.358Z",
        "_id": "6235220c693dd7125f5beaa8",
        "__v": 0
    }
}
``` 

