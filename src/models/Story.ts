'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StorySchema = new Schema({
  name: {
    type: String,
    required: 'Name of the board'
  },
  status: {
    type: [{
      type: String,
      enum: ['Planning', 'In progress',  'Done']
    }],
    default: ['Planning']
  }

});

module.exports = mongoose.model('Story', StorySchema);