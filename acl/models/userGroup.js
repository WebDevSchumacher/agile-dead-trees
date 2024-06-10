const mongoose = require('mongoose');

const userGroupSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true}
});
module.exports = mongoose.model('UserGroup', userGroupSchema);
