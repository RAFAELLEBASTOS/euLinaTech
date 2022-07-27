# {eu}Lina Tech

## Inspiração
 Projeto Final Todas Em Tech Backend {reprograma}:
 Criar um API aplicando CRUD com tema livre.

 Buscando como público alvo mulheres, inspirei-me em criar essa API para que podessemos nos conectarmos e tomar  conhecimentos mais amplos ao nível  de mulheres na tecnologia, à fim de que as mesmas conectem entre si para trocas, sugestões, ajudas, indicações tendo assim um ponto de apoio maior.
<br/><br/>

## Descrição da API
Cadastro de mulheres especializadas em manutenção de celular.
<br/><br/>


## Documentação
Veja a documentação do POSTMAN com as Rotas e demonstrando as informações a serem passada: [Postman]

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
   |    |- 📁 models
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
## 🔃 Manipulação das Rotas de Alunos:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/user/all`                | Retorna todos os usuários            |
| GET          | `/user /search/:id`        | Retorna o usuario referente ao ID solicitado              |
| POST         | `/user /created`         | Cria/cadastra um novo usuário        |
| PUT          | `/ user /update/:id`     | Altera informações de um usuário     |
| DELETE       | `/user/delete/:id`     | Deleta um usuário específico         |

<br>

<br>

## 🚧 Melhorias para o futuro (Em construção)

<br>


*  Terminar implementação de código Front-end.
* Criar endpoints e permissões de administradores para plataforma.
* Criar um espaço para contratações
* Desenvolver uma plataforma online/ aplicativo que ofereça o serviço  reparo e manutenção de celulares feito por mulheres para mulheres
<br>