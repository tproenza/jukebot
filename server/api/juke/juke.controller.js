var mongoose = require('mongoose');
var JukeModel = require('./juke.model');

module.exports = {
  index: function (req, res) {
    var search = req.params.jukeId ? {_id: req.params.jukeId} : {};

    JukeModel
      .findOne(search)
      .exec()
      .then(function (juke) {
        res.send(juke);
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