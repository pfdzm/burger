const connection = require("../config/connection");

const burger = {
  all: function(cb) {
    let queryString = "SELECT * FROM burgers;";
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  create: function(val, cb) {
    queryString = "INSERT INTO burgers (burger_name) ";
    queryString += 'VALUES ("' + val + '");';
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  update: function(id, cb) {
    queryString = "UPDATE burgers SET devoured = true WHERE id=" + id + ";";
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = burger;
