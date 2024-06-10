const mongoose = require('mongoose');

const userResourceSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  resource: {type: mongoose.Schema.Types.ObjectId, ref: 'Resource', required: true},
  canWrite: {type: Boolean, required: true}
});
module.exports = mongoose.model('UserGroup', userResourceSchema);
