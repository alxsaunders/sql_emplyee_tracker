const connection = require("./connection")

class database {
constructor(connection) {
    this.connection = connection;
}
 // update server
updateServer() {
    connection.query("SELECT * from role", function(error, res) {
      allroles = res.map(role => ({ name: role.title, value: role.id }));
    });
  
    connection.query("SELECT * from department", function(error, res) {
      alldepartments = res.map(dept => ({ name: dept.name, value: dept.id }));
    });
  
    connection.query("SELECT * from employee", function(error, res) {
      allemployees = res.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
      }));
    });
  }
}