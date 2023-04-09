const express = require("express");
const app = express();
var Data = new Date();

function print() {
    return `<div style='background-color: rgb(${Math.round(Math.random() * 256)},${Math.round(Math.random() * 256)},${Math.round(Math.random() * 256)}); width:${400}px; height:${40}px'></div>`;
}

app.use(express.static(__dirname))

app.use("/index.html/:id", function (request, response) {
    var answer = "";
    for (let i = 0; i < request.params.id; i++)
        answer += print();
    response.send(answer);
});


app.listen(3000, function () {
    console.log("Сервер запущен. Порт 3000")
});