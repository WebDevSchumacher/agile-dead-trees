const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const resourceSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true}
});
resourceSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Resource', resourceSchema);
