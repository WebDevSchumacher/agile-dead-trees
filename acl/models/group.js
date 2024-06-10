const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const groupSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true}
});
groupSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Group', groupSchema);
