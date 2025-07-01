let express=require("express");
let app=express();


app.get("/",function(req,res){
    res.render("1.ejs");
})


app.post("/",function(req,res){
    res.render("1.ejs");
})

app.listen(3000);