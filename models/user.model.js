const sql = require("../utils/db.js");
class User {
  constructor(user) {
    this.email = user.email;
    this.username = user.username;
    this.password = user.password;
  }

  static getAll(result){
    sql.query("SELECT * FROM  User", (err, res) => {
      if(err) {
        console.log("error ", err)
        result(null, err);
        return;
      }
      result(null, res)
    })
  }

  static create(newUser, result) {
    sql.query("INSERT INTO User SET ?", newUser, (err,res) => {
      if(err){
        console.log(err, 'error create');
        result(err, null);
        return;
      }
      console.log("created employee: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    } )
  }

  static remove(id, result) {
    sql.query("DELETE FROM User WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found employee with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted employee with id: ", id);
      result(null, res);
    });
  }
}

/*
  static updateById(id, employee, result) {
    sql.query(
      "UPDATE employee SET designation = ?, doj = ?, name = ?, salary = ? WHERE id = ?",
      [employee.designation, employee.doj, employee.name, employee.salary, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found employee with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated employee: ", { id: id, ...employee });
        result(null, { id: id, ...employee });
      }
    );
  }
  static remove(id, result) {
    sql.query("DELETE FROM employee WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found employee with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted employee with id: ", id);
      result(null, res);
    });
  }
  static removeAll(result) {
    sql.query("DELETE FROM employee", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log(`deleted ${res.affectedRows} employees`);
      result(null, res);
    });
  }
} */








module.exports = User;