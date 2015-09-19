var mongoose = require('mongoose');
var JukeModel = require('./juke.model');

module.exports = {
  index: function (req, res) {
    JukeModel
      .find()
      .exec()
      .then(function(jukes) {
        res.send(jukes);
      });
 },
 create: function(req, res, next) {
    JukeModel
      .create(req.body)
      .exec()
      .then(function(juke){
        if(err) return next(err);
        res.send(juke);
      })
  } 
}