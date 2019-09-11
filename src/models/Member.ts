'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MemberSchema = new Schema({
    name: {
        type: String,
        required: ' Enter the name of the member'
      },
      TeamId: {type: mongoose.Schema.Types.ObjectId, ref: 'Team' },

});



module.exports = mongoose.model('Member', MemberSchema);
