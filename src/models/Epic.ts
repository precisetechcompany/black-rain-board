'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EpicSchema = new Schema({
  name: {
    type: String,
    required: 'Name of the board'
  },
  description: {
    type: String,
    description: 'this is the epic of the board'
  }

});

module.exports = mongoose.model('Epic', EpicSchema);