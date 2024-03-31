require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const {connect} = require("mongoose");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ с любого домена
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Разрешить методы запросов
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешить заголовки запросов
    next();
});


app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

require('./app/routes/product.route.js')(app);

// index.get("/", (req, res) => res.send("Express on Vercel"));

const PORT = process.env.PORT || 8080;

async function start() {
    // await connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true }).then(() => {
    //     console.log("Успешно подключился к базе данных");

    app.listen(PORT, () => {
            console.log("Сервер прослушивает порт 3000");
        });

    // }).catch(err => {
    //     console.log('Не удалось подключиться к базе данных.', err);
    //     process.exit();
    // });
}

start();
