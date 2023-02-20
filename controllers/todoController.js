module.exports=(app)=>{
    app.get('/todo',(req,res)=>{
        var data=["item 1","item 2","item 3"];
        res.render('todo',{data:data});
    });

    app.post('/todo',(req,res)=>{
       
    });

    app.delete('/todo',(req,res)=>{

    });
}