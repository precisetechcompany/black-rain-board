'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: ' Enter the name of the user'
  },
  email: {
    type: [{
      type: String,
      required: 'Enter the email address'
    }], 
  }
});

module.exports = mongoose.model('User', UserSchema);