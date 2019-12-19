'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TeamSchema = new Schema({
  team_name: {
    type: String,
    required: ' Enter the name of the team'
  },
  TeamId: {type: mongoose.Schema.Types.ObjectId, ref: 'Team' },

});



module.exports = mongoose.model('Team', TeamSchema);
