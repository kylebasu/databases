var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      var connection = db.getConnection();

      connection.connect();
      connection.query("SELECT * FROM messages", function(err, rows, fields) {
        if (!err){
          callback(rows);

        } else {
          console.log("Error fetching messages");
        }
      });
      connection.end();

    }, 
    post: function (message, callback) {

     // a function which can be used to insert a message into the database
     var connection = db.getConnection();

      connection.connect();
      connection.query("INSERT INTO messages SET ? ", message, function(err) {
        if (err) throw err;
        callback();
        
      });
      connection.end();

    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var connection = db.getConnection();

      connection.connect();
      connection.query("SELECT * FROM users", function(err, rows, fields) {
        if (!err){
          callback(rows);

        } else {
          console.log("Error fetching users");
        }
      });
      connection.end();
    },
    post: function (user, callback) {

      var connection = db.getConnection();

      connection.connect();
      connection.query("INSERT INTO messages SET ? ", user, function(err) {
        if (err) throw err;
        callback();
        
      });
      connection.end();}
  }
};

