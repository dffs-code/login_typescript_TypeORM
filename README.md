# API de Login utilizando Typescript, TypeORM e banco de dados PostgreSQL

Para rodar este projeto, é necessário ter um banco de dados postgres instalado em sua máquina e arquivo .env em sua raíz que tenha a seguinte estrutura: 

```
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = seuUsername
TYPEORM_PASSWORD = suaSenha
TYPEORM_DATABASE = seuDatabase
TYPEORM_PORT = suaPorta
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
TYPEORM_ENTITIES = src/entities/*.ts
TYPEORM_ENTITIES_DIR = src/entities

```
Após criado este `.env`, você deve rodar o comando de instalação das libs: `
`npm install`
ou
`yarn`

Após isso, deve-se rodar as migrations com o comando a seguir:
`yarn typeorm migration:run -d src/database/dataSource.ts`

A partir disso, o backend poderá rodar na porta 3030.

Nesta API, as rotas disponíveis são: 
`/login`: rota no método POST que recebe o seguinte objeto como payload: 
```
{
	firstParam: string,
	password: string
}```

`/register`: rota no método POST que recebe o seguinte objeto como payload:

```
{
	name: string,
	email: string,
	password,
	phone: string,
	accept_terms: boolean,
	accept_newsletter: boolean 
}
```
`/users/all`: rota no método POST que retorna todos os usuários e suas informações.