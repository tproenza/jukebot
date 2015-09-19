//'use strict';
var mongoose = require('mongoose');

var jukeSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  songQueue: [{
  	uri: String,
  	artist: String,
  	title: String,
  	genre: String,
  	requestedBy: String
  }],
  jukeList: [{
  	uri: String,
  	artist: String,
  	title: String,
  	genre: String
  }]
});

var JukeModel = mongoose.model('JukeModel', jukeSchema);

module.exports = JukeModel;

