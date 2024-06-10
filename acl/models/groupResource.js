const mongoose = require('mongoose');

const groupResourceSchema = mongoose.Schema({
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true},
  resource: {type: mongoose.Schema.Types.ObjectId, ref: 'Resource', required: true},
  canWrite: {type: Boolean, required: true}
});
module.exports = mongoose.model('UserGroup', groupResourceSchema);
