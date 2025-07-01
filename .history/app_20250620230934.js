let express=require("express");
let app=express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine",'ejs');

app.get("/",function(req,res){
    res.render("1.ejs");
})

let expenses = [];
app.post("/expenses",function(req,res){
  const { name, amount } = req.body;
  expenses.push({ name, amount: Number(amount) }); 
  res.render('expenses.ejs', { name, amount })
})

app.listen(3000);