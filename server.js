var express=require('express');
var path=require('path');
var exphbs  = require('express-handlebars');
var app=express();
var port=4000;

app.set('views', 'dist/views/');
app.engine('hbs', exphbs({defaultLayout: 'main',extname:'.hbs',layoutsDir:'dist/views/layouts/'}));
app.set('view engine', 'hbs');



app.get('/' ,function(req,res){
        res.render('index',{layout:false});
});

app.use('/', express.static(__dirname + '/dist/public'));

app.listen(port,function(){
    console.log('at port '+port);
});