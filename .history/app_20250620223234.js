let express=require("express");
let app=express();
app.use(express.urlencoded({ extended: true }));
app.set()

app.get("/",function(req,res){
    res.render("1.ejs");
})


app.post("/expenses",function(req,res){
  const { name, amount } = req.body;
  res.render('expenses.ejs', { name, amount })
})

app.listen(3000);