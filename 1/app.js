function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let Data = new Date();
var num;

const express = require("express");
const app = express();
app.use(function(request,response,next){
    console.log(`Запрошенный адрес: ${request.url} \t ${Data = new Date()}`);
    next();
});

app.get("/", function (request, response) {
    response.send(`<h1 style='font-size:${num = getRandomInt(100)}px'>Главная страница</h1>`);
});

app.get("/home", function (request, response) {
    response.send(`<h1 style='font-size:${num = getRandomInt(100)}px'>Главная страница</h1>`);
});

app.get("/contact", function (request, response) {
    response.send(`<p style='font-size:${num = getRandomInt(100)}px'>Денис</p>`);
});

app.get("/*", function (request, response) {
    response.send(`<p style='font-size:${num = getRandomInt(100)}px'>Страница не найдена</p>`);
});
app.listen(3000);