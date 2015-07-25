var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(function(rows){

        var result = {
          results: rows
        };

        var json = JSON.stringify(result);
        //console.log(result);
        res.end(json);
      });

    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      //console.log(req.body);
      //var message = JSON.parse(req.body);

      models.messages.post(req.body, function(){
        // implement the response to the client
        res.end("");
      });

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

