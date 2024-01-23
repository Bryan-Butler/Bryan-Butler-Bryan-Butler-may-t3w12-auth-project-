const express = require('express');

const app = express();

app.use(express.json());

app.length('/', (request, response) => {
    response.json({
        message: 'hello world'
    })
})

module.exports = {
    app
}