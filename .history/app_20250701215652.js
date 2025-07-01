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

// to get the data from transaction page to insights(category)

app.get("/insights", function (req, res) {

  let categoryAmount_result = {};

  for (let txn of transaction_data) {
    let category = txn.category;
    let amount = parseFloat(txn.amount);

    if (categoryAmount_result [category]) {
      categoryAmount_result [category] += amount;
    } else {
      categoryAmount_result [category] = amount;
    }
  }

  res.render("insights.ejs", { data: categoryAmount_result ,});
});





// to get the data from transaction page to food_insights

app.get("/food_insights", function(req, res) {
  let foodData = [];

  for (let txn of transaction_data) {
    if (txn.category.toLowerCase() === 'food') {
      foodData.push({
        description: txn.description,
        amount: parseFloat(txn.amount),
        date: txn.date,
        time: txn.time
      });
    }
  }

  res.render("food_insights.ejs", { data: foodData });
});


// to get the data from transaction page to travel_insights

app.get("/travel_insights", function(req, res) {
  let travelData = [];

  for (let txn of transaction_data) {
    if (txn.category.toLowerCase() === 'travel') {
      travelData.push({
        description: txn.description,
        amount: parseFloat(txn.amount),
        date: txn.date,
        time: txn.time
      });
    }
  }

  res.render("travel_insights.ejs", { data: travelData });
});



// to get the data from transaction page to shopping_insights

app.get("/shopping_insights", function(req, res) {
  let shoppingData = [];

  for (let txn of transaction_data) {
    if (txn.category.toLowerCase() === 'shopping') {
      shoppingData.push({
        description: txn.description,
        amount: parseFloat(txn.amount),
        date: txn.date,
        time: txn.time
      });
    }
  }

  res.render("shopping_insights.ejs", { data: shoppingData });
});



// to get the data from transaction page to grocery_insights

app.get("/shopping_insights", function(req, res) {
  let shoppingData = [];

  for (let txn of transaction_data) {
    if (txn.category.toLowerCase() === 'shopping') {
      shoppingData.push({
        description: txn.description,
        amount: parseFloat(txn.amount),
        date: txn.date,
        time: txn.time
      });
    }
  }

  res.render("shopping_insights.ejs", { data: shoppingData });
});


app.listen(3000);