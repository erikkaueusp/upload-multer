// server.js // para executar basta digitar no terminal node server
const express = require('express')
	, app = express();

app.use(express.static('public'));
app.listen(3000, () => console.log('App na porta 3000'));