const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const queryParser = require('express-query-int')

const cors = require('./cors');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())
server.use(cors);
server.use(queryParser());

server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server is running');
});

module.exports = server;

