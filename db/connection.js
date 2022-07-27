const mysql = require("mysql12")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3006,
    user: "root",
    password: "rootroot",
    database: "employee"
  });
  
 
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\nWelcome to the Employee Management System!\n");
    // startEmployeeManager();
    // updateServer();
  });

  module.exports = connection;