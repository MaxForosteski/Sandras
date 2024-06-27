const express = require("express");
const app = express();
const port = 3000;

const indexrouter = require('./routes/index')

app.use('/', indexrouter);

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:"+port);
});