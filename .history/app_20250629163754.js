let express=require("express");
let app=express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine",'ejs');

const path=require("path");
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",function(req,res){
    res.render("home.ejs");
})


const transaction_data=[];
app.post("/transactions",function(req,res){
    const {date,time,amount,category,description } = req.body;
    transaction_data.push({date,time,amount,category,description});
    res.render("transactions.ejs",{data:transaction_data || []});
})

app.get("/insights",function(req,res){
  
})





// let expenses = [];
// app.post("/expenses",function(req,res){
//   const { name, amount } = req.body;
//   expenses.push({ name, amount: Number(amount) }); 
// //   res.render('expenses.ejs', { name, amount })
//   res.render("expenses", { expenses:expenses || []});
// })

app.listen(3000);