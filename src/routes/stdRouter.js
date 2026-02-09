const controllers = require('../controllers/stdControllers')

const express = require('express');

const router =  express.Router();

router.get('/', controllers.homepage);
router.get('/posts/:id', controllers.getPostByID);
router.post('/search', controllers.searchByTerm);
router.get('/about', controllers.aboutPage);

module.exports = router;

/* 
function insertPostData() {
    PostSchema.insertMany([
        {
            title: "Meu primeiro CRUD com Node.js e MongoDB 🚀",
            body: "Hoje consegui finalizar meu primeiro CRUD completo usando Express, Mongoose e Postman pra testar as rotas. Foi meio difícil entender o async/await no começo, mas agora tudo faz sentido. Próximo passo: implementar autenticação com JWT!",
            imageUrl: "https://example.com/images/crud-node.jpg"
        },
        {
            title: "Erro bizarro no MongoDB: 'Cast to ObjectId failed' 😭",
            body: "Passei 2 horas tentando entender por que minha rota GET /posts/:id não funcionava. No fim, descobri que eu tava passando o ID errado do documento. Dica pra mim mesmo: sempre checar se o _id no MongoDB é o mesmo que tá sendo usado na requisição.",
            imageUrl: "https://example.com/images/mongodb-error.jpg"
        },
        {
            title: "Aprendendo a usar o GitHub como um dev de verdade 🧠",
            body: "Finalmente aprendi a diferença entre git fetch, pull e push! Também criei meu primeiro repositório público pra guardar meus projetos de estudo. Agora entendo por que todo mundo fala que Git é essencial pra quem programa.",
            imageUrl: "https://example.com/images/github-study.jpg"
        },
        {
            title: "Usando o Flask + Jinja pra criar um mini blog em Python 🐍",
            body: "Testei o Flask pela primeira vez e gostei da simplicidade. O Jinja facilita muito pra renderizar templates e deixar tudo mais dinâmico. Ainda falta aprender sobre banco de dados, mas já tá ficando legal!",
            imageUrl: "https://example.com/images/flask-blog.jpg"
        },
        {
            title: "Refazendo meu projeto com boas práticas 💡",
            body: "Olhei meu código antigo e quase chorei 😂. Refatorei tudo separando controllers, models e routes. Também adicionei try/catch nas funções assíncronas pra evitar erros silenciosos. O código ficou muito mais organizado!",
            imageUrl: "https://example.com/images/code-refactor.jpg"
        }
    ])
}

insertPostData();
 */