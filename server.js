const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const profile = require("./profile");
const content = require("./content");

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
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

server.get('/conteudos/:id', (req, res) => {
    const id = req.params.id;
    let page = {};
    let flag = 0;

    for (let i = 0; i < content.length; i++) {
        if (id == content[i].id) {
            page = content[i];
            flag++;
        }
    }

    if (flag == 0) {
        return res.send("Page not found");
    }

    return res.render("page", { item: page });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(3333);