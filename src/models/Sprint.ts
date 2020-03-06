'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SprintSchema = new Schema({
  description: {
    type: String,
    description: 'this is the sprint '
  },
  From_date: {
    type: Date,
    default: Date.now
  },
  To_date: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Sprint', SprintSchema);