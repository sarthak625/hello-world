var express = require('express');
var app = express()

console.log(require('path').basename(__dirname))
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.listen(process.env.PORT,process.env.IP)
