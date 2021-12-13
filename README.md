
## Montando o ambiente

Para clonar e executar o aplicativo, será necessário [Git](https://git-scm.com), [Docker Engine](https://docs.docker.com/engine/install/) and [Docker-compose](https://docs.docker.com/compose/install/) instalado em sua máquina.

Com todos os programas instalados, execute as seguintes linhas de comando:

```bash
# Clone esse repositório usando SSH:
$ git clone git@github.com:jefferson-dev/b8one-challenge.git

# Acesse a pasta do repositório:
$ cd b8one-challenge

# copie o .env.example para .env:
$ cp .env.example .env
```

Agora preencha a variávei de ambiente:

```
ENVIRONMENT : Ambiente para production ou development, valor default: development
DB_HOST     : Host para acessar seu banco de dados, valor para uso em docker: database, valor para uso local: localhost
DB_PORT     : Porta para criar e acessar seu banco de dados.
DB_USER     : Usuário para criar e acessar seu banco de dados.
DB_PASS     : Senha para criar e acessar seu banco de dados.
DB_DATABASE : Nome para criar a tabela no banco de dados.
```

## Executando a aplicação

```bash
# Execute dentro da pasta da aplicação para startar
$ docker-compose up --build -d
```

## Para executa testes unitários da aplicação

```bash
# Execute dentro da pasta da aplicação
$ yarn test
    ou
$ npm run test
```

## Parando a aplicação

```bash
# Execute dentro da pasta da aplicação para parar
$ docker-compose down
```

## Collections para teste da aplicação


[Insomnia](./B8One-Challenge.Collection.Insomnia.json)


## API Routers

`GET /`: Retorna a seguindo mensagem: "API is running."

`GET /accounts`: Lista todos os accounts

`GET /accounts/:id`: Retorna uma account

`POST /accounts`: Cria um account

`PUT /accounts/:id`: Atualiza um account

`DELETE /accounts/:id`: Deleta uma account
