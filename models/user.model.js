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
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted employee with id: ", id);
      result(null, res);
    });
  }

  static updateById(id,user,result) {
    sql.query("UPDATE User SET email = ?, username = ?, password = ? WHERE id =?", [user.email, user.username, user.password, id], 
    (err, res) => {
      if(err){
        console.log("error update", err);
        result(null,err);
        return;
      } 
      if(res.affectedRows == 0) {
        result({kind: "not found"}, null);
        return;
      }
      console.log("upadated user: ", {id: id, ...user});
      result(null,{id: id, ...user});
    }
    )
  }

  static findById = (userId, result) => {
    sql.query(`SELECT * FROM User WHERE id = ${userId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found employee with the id
      result({ kind: "not_found" }, null);
    });
  };

}
module.exports = User;