const express = require('express');
const app = module.exports = express();
let fake = require('../fake.json');

app.get('/', function(req, res) {
    res.send(fake);
});