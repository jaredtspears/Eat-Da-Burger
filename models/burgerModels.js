
// creating a route call for the orm
var orm = require("../config/orm.js");
var burgers = {
    all: function(burgz) {
      orm.all("burgers", function(res) {
        burgz(res);
      });
    },
   
    create: function(cols, vals, burgz) {
      orm.create("burgers", cols, vals, function(res) {
        burgz(res);
      });
    },

    update: function(objColVals, condition, burgz) {
      orm.update("burgers", objColVals, condition, function(res) {
        burgz(res);
      });
    },

    delete: function(condition, burgz) {
      orm.delete("burgers", condition, function(res) {
        burgz(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burgers;
  