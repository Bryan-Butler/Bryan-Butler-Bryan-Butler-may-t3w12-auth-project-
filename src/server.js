const express = require("express");

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hello world"
    })
});

const userRouter = require('./controllers/UserController')
app.use

module.exports = {
    app
}