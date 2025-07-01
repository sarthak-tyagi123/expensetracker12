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

// to get the data from transaction page to insights
app.get("/insights", function (req, res) {

  let categoryAmount_result = {};

  for (let txn of transaction_data) {
    let category = txn.category;
    let amount = parseFloat(txn.amount);

    if (categoryAmount_result[category]) {
      categoryAmount_result[category] += amount;
    } else {
      result[category] = amount;
    }
  }

  res.render("insights.ejs", { data: categoryAmount_result });
});








// app.get("/food_insights",function(req,res)
// {
//   res.render("food_insights.ejs",{data:transaction_data || []})
// })


app.listen(3000);