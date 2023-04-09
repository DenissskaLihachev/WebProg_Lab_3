const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.get("/index(.php)?(.html)?/?", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.get("/content(.php)?(.html)?/?", function (request, response) {
    response.sendFile(__dirname + "/content.html");
});

app.get("/info(.php)?(.html)?/?", function (request, response) {
    response.sendFile(__dirname + "/info.html");
});

app.listen(3000, function () {
    console.log("Сервер запущен. Порт 3000")
});