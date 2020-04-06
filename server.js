const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const profile = require("./profile");
const content = require("./content");

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get('/', (req, res) => {
    return res.render("index", { items: profile });
});

server.get('/sobre', (req, res) => {
    return res.render("sobre");
});

server.get('/conteudos', (req, res) => {
    return res.render("conteudos", { items: content });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(3333);