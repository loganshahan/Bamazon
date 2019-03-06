var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon_DB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryProducts();
    // prompt();
  });
  
  function queryProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price);
      }
      console.log("-----------------------------------");
    });
    prompt();
  };

  function prompt(){
    inquirer
    .prompt([
      {
        name: "id",
        type: "rawlist",
        message: "What is the ID of the item you would like to purchase?",
        choices: ["1","2","3","4","5","6","7","8","9","10"]
      },
      {
        name: "quantity",
        type: "input",
        message: "What is the quanity of the item you would like to purchase?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
      },
    ])
    .then(function(answer) {
        var item = answer.id;
        var quantity = answer.quantity
        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, {id: item}, function(err, res){
            if(err) throw err;

            else{
                var productData = res[0];
                if(quantity <= productData.quantity){
                    
                    var updateQueryStr = 'UPDATE products SET quantity = ' + (productData.quantity - quantity) + ' WHERE id = ' + item;
                    connection.query(updateQueryStr, function(err, res){
                        if(err) throw err;
                        console.log("Your total is " + quantity*productData.price);
                    })
                    
                    
                }
                else{
                    console.log("Insuffficient Quanitity");
                    queryProducts();
                }
            }
        })
        // based on their answer, sell item or display quantity error
    //     if (quantity =< item.quantity) {
    //       sellProduct();
    //       console.log("Your total is " + answer.quantity*answer.id.price);
    //     }
    //     else {
    //       console.log("Insuffficient Quanitity");
    //     }
    //   });
  });
}

  function sellProduct() {
    
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          quantity: productData.quantity- quantity
        },
        {
            id: item
        }
      ],
      function(err, res) {
        console.log(query.sql);
        
        
        
      }
    );
    
    };