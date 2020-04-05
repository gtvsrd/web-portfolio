const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
})

server.get('/', (req, res) => {
    res.render("index");
});

server.get('/sobre', (req, res) => {
    res.render("sobre");
});

server.get('/conteudos', (req, res) => {
    res.render("conteudos");
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(3333);