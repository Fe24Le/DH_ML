
var express = require('express') //llamamos a Express
var app = express()     
const path = require('path');
let fs = require('fs');

const port = process.env.PORT || 3001  // establecemos nuestro puerto

app.listen(port,()=> console.log(`Servidor corriendo en el puerto ${port}`));

//función middleware para servir archivos estáticos esta son las opciones

app.use('/', express.static(__dirname + '/views')); //esta  es la mas especifica 

app.use(express.static('public')); //para los archivos css 

//links a paginas

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/index.html'))
    //res.sendFile(path.join('/index.html'))
  });

app.get('./pages__form/login.html', function(req, res){
    res.sendFile(path.join(__dirname + '/pages__form/login.html'))
  });

app.get('./pages__form/register.html', function(req, res){
    res.sendFile(path.join(__dirname +'/pages__form/register.html'))
   
  });


