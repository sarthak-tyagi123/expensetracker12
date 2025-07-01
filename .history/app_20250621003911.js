let express=require("express");
let app=express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, 'public')));
const path=require



app.get("/",function(req,res){
    res.render("index.ejs");
})


app.get("/home",function(req,res){
    res.render("1.ejs");
})

let expenses = [];
app.post("/expenses",function(req,res){
  const { name, amount } = req.body;
  expenses.push({ name, amount: Number(amount) }); 
//   res.render('expenses.ejs', { name, amount })
  res.render("expenses", { expenses:expenses || []});
})

app.listen(3000);