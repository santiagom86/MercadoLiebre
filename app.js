const express = require('express');
const app = express();

//Llamo a la libreria Path
const path = require('path');

//Declaro la carpeta public como visible
app.use(express.static(path.join(__dirname, './public')));


app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', function(req, res){
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/views/login.html');
});