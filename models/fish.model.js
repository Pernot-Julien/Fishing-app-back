const sql = require("../utils/db.js");
class Fish {
  constructor(fish) {
    this.espece = fish.espece;
    this.taille = fish.taille;
    this.description = fish.description;
    this.image = fish.image;
  }

  static getAll(result){
    sql.query("SELECT * FROM  Fish", (err, res) => {
      if(err) {
        console.log("error ", err)
        result(null, err);
        return;
      }
      result(null, res)
    })
  }

  static create(newFish, result) {
    sql.query("INSERT INTO Fish SET ?", newFish, (err,res) => {
      if(err){
        console.log(err, 'error create');
        result(err, null);
        return;
      }
      console.log("created fish: ", { id: res.insertId, ...newFish });
      result(null, { id: res.insertId, ...newFish });
    } )
  }

  static remove(id, result) {
    sql.query("DELETE FROM Fish WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted fish with id: ", id);
      result(null, res);
    });
  }

  static updateById(id,fish,result) {
    sql.query("UPDATE Fish SET espece = ?, taille = ?, description = ?, image = ? WHERE id =?", [fish.espece, fish.taille, fish.description, fish.image, id], 
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
      console.log("upadated fish: ", {id: id, ...fish});
      result(null,{id: id, ...fish});
    }
    )
  }

  static findById = (fishId, result) => {
    sql.query(`SELECT * FROM Fish WHERE id = ${fishId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found fish: ", res[0]);
        result(null, res[0]);
        return;
      }
      //? not found fish with the id
      result({ kind: "not_found" }, null);
    });
  };

}
module.exports = Fish;