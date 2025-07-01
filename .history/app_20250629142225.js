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
    const { name, amount ,date } = req.body;
     transaction_data.push()
    res.render("transactions.ejs");
})

// let expenses = [];
// app.post("/expenses",function(req,res){
//   const { name, amount } = req.body;
//   expenses.push({ name, amount: Number(amount) }); 
// //   res.render('expenses.ejs', { name, amount })
//   res.render("expenses", { expenses:expenses || []});
// })

app.listen(3000);