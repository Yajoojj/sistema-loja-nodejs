const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;
const routes = require('./routes');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
