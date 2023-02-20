var express=require('express');
var todoController=require('./controllers/todoController')

var app=express()

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//listen to port
app.listen(3000);
console.log("app is running at port 3000...");

//fire controllers
todoController(app);