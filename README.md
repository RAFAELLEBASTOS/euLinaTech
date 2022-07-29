# {eu}Lina Tech

## Inspiração

 {eu}lina nasce da urgência, da necessidade e da inquietação de impulsionar mulheres nas mais diversas áreas da tecnologia e inovação. Tive a ideia de fazer uma ApI de cadastro para que pudéssemos cada vez mais nos conectar, nos motivar, tirar dúvidas, errar e acertar sem que nos sentíssemos menores e para que conquistemos o nosso espaço na profissão

<br/><br/>

## Descrição da API
Cadastro de mulheres especializadas em manutenção de celular.
<br/><br/>


## Documentação
Veja a documentação do POSTMAN com as Rotas e demonstrando as informações a serem passada: [Postman](https://documenter.getpostman.com/view/22432896/UzXPxGjV)

## 📁 Arquitetura MVC 

```
 📁 PROJETOFINAL
   |
   |-  📁node_modules
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 userController.js  
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 helpers
   |         |- 📑 auth.js
   |
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |   |    |- 📁 models
   |         |- 📑 userModel.js
   |
   |    |- 📁 routes
   |         |- 📑 UserRoutes.js
   |
   |    |- 📑 app.js
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 ProcFile
   |- 📑 README.md
   |- 📑 server.js
```
<br>


## Instalação

Para a instalação do projeto siga as instruções:

### Pré-requisitos
É necesário possuir instalado as ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [database NoSQL] [Mongodb](https://www.mongodb.com)
- IDE de sua preferencia, para a criação deste projeto foi utilizado o [VSCode](https://code.visualstudio.com).

### Rodando o Projeto
1. Clone este projeto

  ```$ git clone https://github.com/RAFAELLEBASTOS/euLinaTech.git```

2. Acesse o repositório local

  ```$ cd euLinaTech  ```

3. Instale as dependências

  ```$ npm install```

4. Crie um arquivo ```.env``` conforme o ```.env.example``` e adicione os valores as variáveis de ambiente. 

5. Execute o servidor

  ```$ npm start```

## Tecnologias

Para construção desse projeto foi utilizado:
- [JavaScript](https://www.javascript.com)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- [Postman](https://www.postman.com)
- [VSCode](https://code.visualstudio.com)
- [heroku](https://id.heroku.com/login)

### Pacotes Utilizados
- [mongoose](https://mongoosejs.com)
- [nodemon](https://nodemon.io)
- [express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)


## 🔃 Rotas

* local: http://localhost:8989

* Heroku: https://eulina-tech.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## Rotas

### Rota inicial

#### Localhost
| Método HTTP  | Tipo Rota | Endpoint                     | Descrição                            |
| ------------ | --------- | ---------------------------- | ------------------------------------ |
| GET          | Pública   | `http://localhost:8989/`     |  Mensagem de apresentação (Index)    |

#### Heroku
| Método HTTP  | Tipo Rota | Endpoint                     | Descrição                            |
| ------------ | --------- | ---------------------------- | ------------------------------------ |
| GET          | Pública   | `https://eulina-tech.herokuapp.com/` |  Mensagem de apresentação (Index)    |

### Rotas usuários
| Método HTTP  | Tipo Rota | Endpoint                                    | Descrição                                                                |
| ------------ | --------- | ------------------------------------------- | -------------------------------------------------------------------------|
| GET          | Privada   | `/`     | Retorna todos usuários  
| GET          | Privada   | `/:id`  | Retorna o usuário referente ao ID solicitado
| POST         | Pública   | `/`     | Cria/Cadastra um novo usário                                      
| POST         | Pública   | `/login`| Retorna token de login            |
| PATCH        | Privada   | `/:id`  | Altera informações de um usuário  |
| DELETE       | Privada   | `/:id`  | Deleta um usuário específico      |

<br>

## 🚧 Melhorias para o futuro (Em construção)

<br>

* Implementar código Front-end.
* Criar endpoints e permissões de administradores para plataforma.
* Criar um espaço para contratações.

<br>

