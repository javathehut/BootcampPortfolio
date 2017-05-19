const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded 
app.use(bodyParser.json());// parse application/json 
app.use(express.static('public'));

app.get('/todos', (req, res) => {
    fs.readFile('./public/todoFile.json', 'utf8', (err, data)=>{
        if(err) throw err;
        res.json(JSON.parse(data))
    });
})

app.post('/todos', (req, res) => {
   let todos = req.body;
   todos = fs.writeFile('./public/todoFile.json', JSON.stringify(todos), (err)=>{
        if(err) throw err;
    });
    res.send(todos)
})



app.listen(8080, () => {
    console.log('listening on 8080');
});