var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Austintx15!",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  afterConnected();
});

function afterConnected() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    else {

      console.table("\nProducts Availible", res)

      inquirer.prompt([{
        name: "ID",
        message: "Please select the item id of the product you would like to purchase?"
      }, {
        name: "units",
        message: "How many do you want?"
      }]).then(function (answer) {

        var userAnswer = answer.ID;
        var checkID = res[(userAnswer) - 1].item_id;
        var productName = res[(userAnswer) - 1].product_name;

        console.log("\nInvoice")
        console.log("---------------------------");
        console.log("You Requested: " + productName);

        if (userAnswer = checkID) {
          console.log("In-stock quantity: " + res[(userAnswer) - 1].stock_quantity);
          console.log("You requested : " + answer.units + " units");
          var checkingStock = res[(userAnswer) - 1].stock_quantity;
          var answerUnits = answer.units;
          if (checkingStock < answerUnits) {
            console.log('Insufficient quantity, please select a lower quantity');
            console.log("---------------------------\n")
          } else {
            checkingStock = checkingStock - answerUnits;
            console.log("Left in stock: " + checkingStock);
            var productPrice = res[(userAnswer) - 1].price;


            console.log("Price per item: " + productPrice);
            var totalCost = productPrice * answerUnits;
            console.log("---------------------------")
            console.log("Total Cost Today: " + totalCost);
            console.log("---------------------------\n");
          }
        }
      })
    };
    connection.end();
  });
};
