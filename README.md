# Awesome Project Build with TypeORM

Para rodar este projeto, é necessário ter um arquivo .env em sua raíz que tenha a seguinte estrutura: 

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
Após criado este .env