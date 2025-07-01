let express=require("express");
let app=express();


app.get("/",function(req,res){
    res.render("1.ejs");
})


app.post("/expenses",function(req,res){
    res.render("expenses.ejs", r);
})

app.listen(3000);