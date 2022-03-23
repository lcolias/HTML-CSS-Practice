const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const count = readFileSync('./visitorCount.txt');
    const newCount = parseInt(count) + 1; 

    writeFileSync('./visitorCount.txt', newCount);

    res.render('index', { visitCount: count });
});

app.listen(5000, () => console.log('http://localhost:5000/'));