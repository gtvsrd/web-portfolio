const express = require('express');
const routes = express.Router();

const profile = require("./profile");
const content = require("./content");

routes.get('/', (req, res) => {
    return res.render("index", { items: profile });
});

routes.get('/sobre', (req, res) => {
    return res.render("sobre");
});

routes.get('/conteudos', (req, res) => {
    return res.render("conteudos", { items: content });
});

routes.get('/conteudos/:id', (req, res) => {
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

routes.use(function(req, res) {
    res.status(404).render("not-found");
});

module.exports = routes;