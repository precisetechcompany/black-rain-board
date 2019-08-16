'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the board'
  },
  Estimate: {
    type: [{
      type: Number,
      enum: ['1', '2', '3', '5', '8']
    }],
    default: ['1']
  },
  status: {
    type: [{
      type: String,
      enum: ['Planning', 'To do', 'In progress', 'Testing', 'Done']
    }],
    default: ['Planning']
  }});

module.exports = mongoose.model('Task', TaskSchema);