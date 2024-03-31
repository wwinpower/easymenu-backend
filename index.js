require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {connect} = require("mongoose");

const index = express();

index.use(bodyParser.urlencoded({
    extended: true
}))

index.use(bodyParser.json())
index.use(morgan('dev'));

require('./app/routes/product.route.js')(index);

app.use("/", (req, res)=>{
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
});

const PORT = process.env.PORT || 8080;

async function start() {
    await connect(`${process.env.MONGO_URL}`).then(() => {
        console.log("Успешно подключился к базе данных");

        index.listen(PORT, () => {
            console.log("Сервер прослушивает порт 3000");
        });

    }).catch(err => {
        console.log('Не удалось подключиться к базе данных.', err);
        process.exit();
    });
}

start();
