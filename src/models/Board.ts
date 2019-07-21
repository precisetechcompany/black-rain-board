'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BoardSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the board'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['open', 'completed']
    }],
    default: ['open']
  },
  category: {
    type: [{
      type: String,
      enum: ['scrum', 'kanban']
    }],
    default: ['scrum']
  }
});

module.exports = mongoose.model('Boards', BoardSchema);