var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM task", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });


//module.exports = User;